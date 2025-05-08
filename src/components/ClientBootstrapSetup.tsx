'use client';

import { useEffect } from 'react';

export default function ClientBootstrapSetup() {
  useEffect(() => {
    // Importera Bootstrap JavaScript dynamic
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
