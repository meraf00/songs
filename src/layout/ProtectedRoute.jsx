import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { isLoggedIn, isLoading } = useSelector((state) => state.user.user);

  if (!isLoggedIn && !isLoading) {
    return <Navigate to="/" replace />;
  }

  return children;
}
