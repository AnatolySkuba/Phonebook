import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router';
import UserMenu from './UserMenu/UserMenu';
import { Navigation } from './Navigation/Navigation';
import { AuthNav } from './AuthNav/AuthNav';
import {
  AppBar,
  Stack,
  Box,
  Toolbar,
  Container,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD500',
      contrastText: '#005BBB',
    },
    text: {
      secondary: '#FFD500',
    },
    background: {
      paper: '#005BBB',
    },
  },
});

export default function ButtonAppBar() {
  const isToken = useSelector(getToken);

  return (
    <>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
              <Container sx={{ mt: '1rem' }}>
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Navigation />
                  </Typography>
                  {isToken ? <UserMenu /> : <AuthNav />}
                </Toolbar>
              </Container>
            </AppBar>
          </Box>
        </ThemeProvider>
      </Stack>
      <Container sx={{ mt: '1rem' }}>
        <Outlet />
      </Container>
    </>
  );
}
