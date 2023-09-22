import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const {
    isLoggedIn,
    user: { isLoading },
  } = useSelector((state) => state.auth);

  if (!isLoggedIn && !isLoading) {
    return <Navigate to="/" replace />;
  }

  return children;
}
