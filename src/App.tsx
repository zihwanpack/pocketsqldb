import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
