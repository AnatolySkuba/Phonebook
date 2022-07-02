import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useLoginMutation } from 'redux/auth/authApi';
import { setIsLoggedIn } from 'redux/auth/auth-slice';
import { Form, Fieldset, Label, Input, Button } from './LoginPage.styled';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [login, { data, isSuccess }] = useLoginMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    await login({ email: email, password: password });
    setEmail('');
    setPassword('');
    toast.success('You have logged in successfully');
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isSuccess]);

  return (
    <div>
      <Form onSubmit={handleSubmit} autoComplete="on">
        {/* <Form onSubmit={handleSubmit} autoComplete="off"> */}
        <Fieldset>
          <Label>
            Mail
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Label>
        </Fieldset>
        <Button type="submit">Log in</Button>
      </Form>
    </div>
  );
}
