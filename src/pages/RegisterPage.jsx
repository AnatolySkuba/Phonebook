import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRegisterMutation } from 'redux/auth/authApi';
import { setIsSignedIn } from 'redux/auth/auth-slice';
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
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSnackbar } from 'notistack';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [register, { data, isLoading, isSuccess, isError, error }] =
    useRegisterMutation();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await register({
      name: name,
      email: email,
      password: password,
    });
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
        setIsSignedIn({
          user: { name: data.user.name, email: data.user.email },
          token: data.token,
        })
      );
      enqueueSnackbar('You have registered successfully', {
        variant: 'success',
      });
    }
    if (isError && error?.originalStatus === 400) {
      enqueueSnackbar('Error creating user', {
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
  }, [dispatch, isSuccess, isError]);

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
        label="Name"
        size="small"
        margin="normal"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
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
            <AppRegistrationIcon />
          )
        }
      >
        Sign up
      </Button>
    </Box>
  );
}
