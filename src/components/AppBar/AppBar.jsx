import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router';
import UserMenu from './UserMenu/UserMenu';
import { Navigation } from './Navigation/Navigation';
import { AuthNav } from './AuthNav/AuthNav';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isToken = useSelector(getToken);

  return (
    <>
      <Header>
        <Navigation />
        {isToken ? <UserMenu /> : <AuthNav />}
      </Header>
      <Outlet />
    </>
  );
};
// import { useSelector } from 'react-redux';
// import { getToken } from 'redux/auth/auth-selectors';
// import { Outlet } from 'react-router';
// import UserMenu from './UserMenu/UserMenu';
// import { Navigation } from './Navigation/Navigation';
// import { AuthNav } from './AuthNav/AuthNav';

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#1976d2',
//     },
//   },
// });

// export default function ButtonAppBar() {
//   const isToken = useSelector(getToken);

//   return (
//     <>
//       <Stack spacing={2} sx={{ flexGrow: 1 }}>
//         <ThemeProvider theme={darkTheme}>
//           <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static" color="primary">
//               <Toolbar>
//                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                   <Navigation />
//                 </Typography>
//                 {isToken ? <UserMenu /> : <AuthNav />}
//               </Toolbar>
//             </AppBar>
//           </Box>
//         </ThemeProvider>
//       </Stack>
//       <Outlet />
//     </>
//   );
// }
