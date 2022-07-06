import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutState } from 'redux/auth/auth-slice';
import { useGetAuthQuery, useLogoutMutation } from 'redux/auth/authApi';
import { getToken } from 'redux/auth/auth-selectors';
import { useState, useEffect } from 'react';
import { Button, Typography, CircularProgress } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSnackbar } from 'notistack';

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Logout, { isLoading, isSuccess, isError }] = useLogoutMutation();
  const isToken = useSelector(getToken);
  const [isSkip, setIsSkip] = useState(false);
  const { data } = useGetAuthQuery(null, { skip: isSkip || !isToken });
  const { enqueueSnackbar } = useSnackbar();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  console.log('isLoading, isSuccess, isError', isLoading, isSuccess, isError);

  const handleLogout = async () => {
    console.log('handleLogout', isLoading, isSuccess, isError);
    setIsSkip(true);
    try {
      await Logout();
    } catch (error) {
      console.log('catch', error, isLoading, isSuccess, isError);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/goit-react-hw-08-phonebook/');
      setIsLoggedOut(true);
    }
    isError &&
      enqueueSnackbar('Something went wrong, please try again later', {
        variant: 'error',
      });
  }, [enqueueSnackbar, isError, isLoading, isSuccess, navigate]);

  useEffect(() => {
    if (isLoggedOut) {
      dispatch(logOutState());
      enqueueSnackbar('You have logged out successfully', {
        variant: 'success',
      });
    }
  }, [dispatch, enqueueSnackbar, isLoggedOut]);

  if (data) {
    return (
      <Typography variant="h6" component="div">
        Welcome {data.name}
        <Button
          variant="contained"
          type="submit"
          margin="normal"
          onClick={handleLogout}
          sx={{ ml: 4 }}
          endIcon={
            isLoading ? (
              <CircularProgress size={16} thickness={6} color="inherit" />
            ) : (
              <LogoutIcon />
            )
          }
        >
          Logout
        </Button>
      </Typography>
    );
  }
}
