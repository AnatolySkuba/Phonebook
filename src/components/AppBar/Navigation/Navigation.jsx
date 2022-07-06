import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';

export const Navigation = () => {
  const isToken = useSelector(getToken);
  const location = useLocation();

  const pathNames = ['/', '/contacts'];
  const currentPathName = location.pathname.split(
    '/goit-react-hw-08-phonebook'
  )[1];
  const currentValue = pathNames.some(e => e === currentPathName)
    ? currentPathName
    : false;

  return (
    <Tabs value={currentValue} aria-label="nav tabs example">
      <Tab
        value="/"
        component={Link}
        to="/goit-react-hw-08-phonebook/"
        label="Home"
      />
      {isToken && (
        <Tab
          value="/contacts"
          component={Link}
          to="/goit-react-hw-08-phonebook/contacts"
          label="Contacts"
        />
      )}
    </Tabs>
  );
};
