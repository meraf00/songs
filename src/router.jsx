import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './layout/ProtectedRoute';
import { HomePage, LoginPage, SignupPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/search',
        element: <>Search page</>,
      },
      {
        path: '/new',
        element: <ProtectedRoute>Create</ProtectedRoute>,
      },
      {
        path: '/edit/:id',
        element: <ProtectedRoute>Update</ProtectedRoute>,
      },
      {
        path: '/:id',
        element: <>Detail</>,
      },
    ],
  },
]);

export default router;
