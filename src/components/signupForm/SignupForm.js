import { useState } from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useLocation } from 'react-router-dom';
import { SignupLoginLink } from '../loginForm/LoginForm.styled';

import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import {
  useValidateName,
  useValidateEmail,
  useValidatePassword,
} from 'components/utils/validateHooks/ValidateHooks';

const initState = { name: '', email: '', password: '' };

const SignupForm = () => {
  const [formValues, setFormValues] = useState(() => initState);
  const [isNameError, nameErrorText] = useValidateName(formValues);
  const [isEmailError, emailErrorText] = useValidateEmail(formValues);
  const [isPassError, passErrorText] = useValidatePassword(formValues);
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
    if (isNameError || isEmailError || isPassError) {
      return;
    }
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
          variant="standard"
          error={isNameError}
          helperText={nameErrorText}
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
          variant="standard"
          error={isEmailError}
          helperText={emailErrorText}
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
          error={isPassError}
          helperText={passErrorText}
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
