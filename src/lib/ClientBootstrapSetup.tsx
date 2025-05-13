// src/lib/ClientBootstrapSetup.tsx
'use client';

import { useEffect } from 'react';

export default function ClientBootstrapSetup() {
  useEffect(() => {
    //@ts-ignore
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
