import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selectors';

export default function PublicRoute({ children }) {
  const isToken = useSelector(getToken);

  if (isToken) {
    return <Navigate to="/goit-react-hw-08-phonebook/contacts" replace />;
  }

  return children;
}
