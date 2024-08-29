import { Outlet } from 'react-router-dom';
const Layout: React.FC = () => {
  return (
    <div className="bg-red-500 h-full w-full">
      <p className="text-red-700">gkdl</p>
      <Outlet />
    </div>
  );
};

export default Layout;
