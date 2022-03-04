import { useState } from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useLocation } from 'react-router-dom';
import { SignupLoginLink } from '../loginForm/LoginForm.styled';

import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const initState = { name: '', email: '', password: '' };

const SignupForm = () => {
  const [formValues, setFormValues] = useState(() => initState);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const { name, email, password } = formValues;
    dispatch(authOperations.signUpOperation({ name, email, password }));
    setFormValues(initState);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        Registration
        <TextField
          id="standard-basic"
          label="User name"
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          //   inputProps={{
          //     inputMode: 'text',
          //     pattern:
          //       "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          //     title:
          //       'Name may contain only letters, apostrophe, dash and spaces.',
          //   }}
          variant="standard"
          sx={{ mb: 2 }}
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          //   inputProps={{
          //     inputMode: 'text',
          //     pattern:
          //       "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          //     title:
          //       'Name may contain only letters, apostrophe, dash and spaces.',
          //   }}
          variant="standard"
          sx={{ mb: 2 }}
          fullWidth
          required
        />
        <TextField
          id="standard-password-input"
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          autoComplete="current-password"
          variant="standard"
          sx={{ mb: 2 }}
          fullWidth
          required
        />
        <LoadingButton
          type="submit"
          // loading={isLoading}
          // disabled={isLoading}
          loadingIndicator="Adding..."
          variant="outlined"
        >
          Register
        </LoadingButton>
      </form>
      <p>
        Already have an account?
        <SignupLoginLink to="/login" state={{ from: location }}>
          Sign in
        </SignupLoginLink>
      </p>
    </>
  );
};

export default SignupForm;
