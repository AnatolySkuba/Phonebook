import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const isToken = useSelector(getToken);

  return (
    <div>
      <Link to="/goit-react-hw-08-phonebook/">Home</Link>
      {isToken && (
        <Link to="/goit-react-hw-08-phonebook/contacts">Contacts</Link>
      )}
    </div>
  );
};
