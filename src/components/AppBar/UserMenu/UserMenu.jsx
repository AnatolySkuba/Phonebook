import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isLoggedOut } from 'redux/auth/auth-slice';
import { useGetAuthQuery, useLogoutMutation } from 'redux/auth/authApi';
import { getToken } from 'redux/auth/auth-selectors';
import { Div, Span } from './UserMenu.styled';
import { useState } from 'react';

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Logout] = useLogoutMutation();
  const isToken = useSelector(getToken);
  const [isSkip, setIsSkip] = useState(false);
  const { data } = useGetAuthQuery(null, { skip: isSkip || !isToken });

  const handleLogout = async () => {
    setIsSkip(true);
    await Logout();
    dispatch(isLoggedOut());
    toast.success('You have logged out successfully');
    navigate('/goit-react-hw-08-phonebook/');
  };

  if (data) {
    return (
      <Div>
        <Span>Welcome {data.name}</Span>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </Div>
    );
  }
}
