'use client';

import { useEffect } from 'react';

export default function ClientBootstrapSetup() {
  useEffect(() => {
    //@ts-expect-error: Ignores `Could not find a declaration file for module`
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
