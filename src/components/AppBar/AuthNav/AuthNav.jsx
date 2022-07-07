import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';

export const AuthNav = () => {
  const location = useLocation();
  const pathNames = ['/register', '/login'];
  const currentPathName = location.pathname.split('/Phonebook')[1];
  const currentValue = pathNames.some(e => e === currentPathName)
    ? currentPathName
    : false;

  return (
    <Tabs value={currentValue} aria-label="nav tabs example">
      <Tab
        value="/register"
        component={Link}
        to="/Phonebook/register"
        label="Registration"
      />
      <Tab
        value="/login"
        component={Link}
        to="/Phonebook/login"
        label="Login"
      />
    </Tabs>
  );
};
