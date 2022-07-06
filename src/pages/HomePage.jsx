import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';

export default function HomePage() {
  const isToken = useSelector(getToken);

  return (
    <>
      <h1>Hi my friend</h1>
      {isToken ? <p>Welcome.</p> : <p>Please, register or log in.</p>}
    </>
  );
}
