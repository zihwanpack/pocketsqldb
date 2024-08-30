import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
