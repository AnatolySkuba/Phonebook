import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';

export const Navigation = () => {
  const isToken = useSelector(getToken);
  const location = useLocation();

  const pathNames = ['/', '/contacts'];
  const currentPathName = location.pathname.split('/Phonebook')[1];
  const currentValue = pathNames.some(e => e === currentPathName)
    ? currentPathName
    : false;

  return (
    <Tabs value={currentValue} aria-label="nav tabs example">
      <Tab value="/" component={Link} to="/Phonebook/" label="Home" />
      {isToken && (
        <Tab
          value="/contacts"
          component={Link}
          to="/Phonebook/contacts"
          label="Contacts"
        />
      )}
    </Tabs>
  );
};
