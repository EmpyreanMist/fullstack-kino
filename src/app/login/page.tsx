import LoginForm from '../../components/LoginForm'
import Header from '../../components/Header';

export default function LoginPage() {
  return (
    <>
      <Header />
      <h1 className="text-primary text-center bg-dark p-3 m-0">Logga in på Kino</h1>
      <LoginForm />
    </>
  );
}
