import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
