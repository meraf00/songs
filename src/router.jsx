import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './layout/ProtectedRoute';
import {
  HomePage,
  LoginPage,
  SignupPage,
  PlaylistPage,
  CreateMusicPage,
  UpdateMusicPage,
} from './pages';

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
        path: '/myplaylist',
        element: <PlaylistPage />,
      },
      {
        path: '/new',
        element: (
          <ProtectedRoute>
            <CreateMusicPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/edit/:id',
        element: (
          <ProtectedRoute>
            <UpdateMusicPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
