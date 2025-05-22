'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase/supabaseClient';
import { Session, User } from '@supabase/supabase-js';

interface UseGlobalLoginTimerResult {
  session: Session | null;
  user: User | null;
  isAuthenticated: boolean;
  secondsLeft: number;
  reset: () => void;
}

// when the use will logout after inactivity
const INACTIVITY_LIMIT: number = 900;

export default function UseGlobalLoginTimerResult(): UseGlobalLoginTimerResult {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [secondsLeft, setSecondsLeft] = useState<number>(INACTIVITY_LIMIT);

  const reset = useCallback(() => {
    setSession(null);
    setUser(null);
    setSecondsLeft(INACTIVITY_LIMIT);
  }, []);

  // getInitial session
  useEffect(() => {
    const getInitialSession = async (): Promise<void> => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Fel vid hämtning av session:', error.message);
        } else if (data?.session) {
          setSession(data.session);
          setUser(data.session.user);
        } else {
          reset();
        }
      } catch (error: unknown) {
        console.error('Något gick fel vid hämtning av session: ', error);
      }
    };

    getInitialSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!session) {
        reset();
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [reset]);

  //start timer when logging in
  useEffect(() => {
    if (!user) return;

    const resetTimer = () => setSecondsLeft(INACTIVITY_LIMIT);

    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, [user]);

  // Automatisk utloggning
  useEffect(() => {
    if (secondsLeft <= 0 && user) {
      (async () => {
        await supabase.auth.signOut();
        reset();
      })();
    }
  }, [secondsLeft, user, reset]);

  return {
    session,
    user,
    isAuthenticated: Boolean(user),
    secondsLeft,
    reset,
  };
}
