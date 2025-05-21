const fetchUser = async () => {
  try {
    const res = await fetch('/api/user', { credentials: 'include', cache: 'no-store' });
    const data = await res.json();
    if (res.ok && data.user) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  } catch (err) {
    console.error('Kunde inte hämta användare:', err);
    setUser(null);
  }
};
