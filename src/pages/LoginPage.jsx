import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'redux/auth/authApi';
import { setIsLoggedIn } from 'redux/auth/auth-slice';
import {
  Button,
  TextField,
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSnackbar } from 'notistack';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [login, { data, isLoading, isSuccess, isError, error }] =
    useLoginMutation();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await login({ email: email, password: password });
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setIsLoggedIn({
          user: { name: data.user.name, email: data.user.email },
          token: data.token,
        })
      );
      enqueueSnackbar('You have logged in successfully', {
        variant: 'success',
      });
    }

    if (isError && error?.originalStatus === 404) {
      enqueueSnackbar("Sorry, we can't find this page", {
        variant: 'error',
      });
    } else if (isError && error?.status === 400) {
      enqueueSnackbar('Invalid email or password', {
        variant: 'error',
      });
    } else if (isError && error?.status === 'FETCH_ERROR') {
      enqueueSnackbar('Internet is disconnected', {
        variant: 'error',
      });
    } else if (isError) {
      enqueueSnackbar('Something went wrong, please try again later', {
        variant: 'error',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isSuccess, isError, error?.originalStatus, error?.status]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      // autoComplete="off"
      sx={{
        padding: '2rem',
        maxWidth: '20rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '0.3rem',
        alignItems: 'baseline',
      }}
    >
      <TextField
        label="Mail"
        size="small"
        margin="normal"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <FormControl variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          sx={{ lineHeight: '2.4375em' }}
        >
          Password *
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          name="password"
          value={password}
          onChange={handleChange}
          size="small"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          sx={{ m: '1rem 0', lineHeight: '4em' }}
        />
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        margin="normal"
        sx={{ width: '8rem' }}
        endIcon={
          isLoading ? (
            <CircularProgress size={16} thickness={6} color="inherit" />
          ) : (
            <LoginIcon />
          )
        }
      >
        Log in
      </Button>
    </Box>
  );
}
