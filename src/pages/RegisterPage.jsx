import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRegisterMutation } from 'redux/auth/authApi';
import { setIsSignedIn } from 'redux/auth/auth-slice';
import { Form, Fieldset, Label, Input, Button } from './RegisterPage.styled';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [register, { data, isSuccess }] = useRegisterMutation();

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
    toast.success('You have registered successfully');
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isSuccess]);

  return (
    <div>
      {/* <Form onSubmit={handleSubmit} autoComplete="off"> */}
      <Form onSubmit={handleSubmit} autoComplete="on">
        <Fieldset>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Label>
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
        <Button type="submit">Sign up</Button>
      </Form>
    </div>
  );
}
