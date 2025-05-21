import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

type Review = {
  name: string;
  rating: number;
  comment: string;
  createdAt: Date;
};