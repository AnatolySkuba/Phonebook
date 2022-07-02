import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selectors';

export default function ProtectedRoute({ children }) {
  const isToken = useSelector(getToken);

  if (!isToken) {
    return <Navigate to="/goit-react-hw-08-phonebook/login" replace />;
  }

  return children;
}
