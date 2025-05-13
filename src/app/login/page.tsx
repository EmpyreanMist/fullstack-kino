import LoginForm from '../../components/LoginForm'
import Navbar from '../../components/Navbar';

export default function LoginPage() {
  return (
    <>
    <Navbar />
      <h1 className="text-primary text-center bg-dark p-3 m-0">Logga in på Kino</h1>
      <LoginForm />
    </>
  );
}
