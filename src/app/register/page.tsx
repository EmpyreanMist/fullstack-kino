import RegisterForm from '../../components/RegisterForm';
import Header from '../../components/Header';
import Footer from '@/components/Footer';

export default function RegisterPage() {
  return (
    <>
      <Header />
      <h1 className="text-primary text-center bg-dark p-3 m-0">Bli medlem på Kino Bio</h1>
      <RegisterForm />
      <Footer />
    </>
  );
}
