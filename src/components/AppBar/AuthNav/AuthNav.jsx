import { Div, Link } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <Div>
      <Link to="/goit-react-hw-08-phonebook/register">Registration</Link>
      <Link to="/goit-react-hw-08-phonebook/login">Login</Link>
    </Div>
  );
};
