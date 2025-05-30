'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface UserData {
  fullName: string;
  email: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/user');
      const data = await res.json();
      if (!res.ok || data.user == null) {
        router.push('/login');
      } else {
        setUser(data.user);
      }
    };
    fetchUser();
  }, [router]);

  return (
    <section className="bg-dark text-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center bg-secondary text-white shadow-lg rounded p-4">
              <Image
                src="/avatar.png"
                alt="Profilbild"
                width={100}
                height={100}
                className="rounded-circle mx-auto mb-3"
              />

              <h2 className="mb-3">Profilsida</h2>
              <p className="mb-2">
                <strong>Namn:</strong> {user?.fullName}
              </p>
              <p className="mb-0">
                <strong>Email:</strong> {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
