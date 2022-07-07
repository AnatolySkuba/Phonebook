import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selectors';

export default function ProtectedRoute({ children }) {
  const isToken = useSelector(getToken);

  if (!isToken) {
    return <Navigate to="/Phonebook/login" replace />;
  }

  return children;
}
