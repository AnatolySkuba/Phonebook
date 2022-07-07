import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ButtonAppBar from 'components/AppBar/AppBar';
import ProtectedRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */)
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */)
);

const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "RegisterPage" */)
);

const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "ContactsPage" */)
);

export default function App() {
  return (
    <Suspense fallback={<ButtonAppBar />}>
      <Routes>
        <Route path="/Phonebook/" element={<ButtonAppBar />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <ProtectedRoute>
                <ContactsPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/Phonebook/" replace={true} />}
        />
      </Routes>
    </Suspense>
  );
}
