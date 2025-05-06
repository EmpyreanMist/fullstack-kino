import RegisterForm from '../../components/registerForm';
import Header from '../../components/header';

export default function RegisterPage() {
  return (
    <>
      <Header />
      <h1 className="text-primary text-center bg-dark p-3 m-0">Bli medlem på Kino Bio</h1>
      <RegisterForm />;
    </>
  );
}
