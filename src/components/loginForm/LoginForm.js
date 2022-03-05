import { useState } from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useLocation } from 'react-router-dom';
import { SignupLoginLink } from './LoginForm.styled';

import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import {
  useValidateEmail,
  useValidatePassword,
} from 'components/utils/validateHooks/ValidateHooks';

const initState = { email: '', password: '' };

const LoginForm = () => {
  const [formValues, setFormValues] = useState(() => initState);
  const [isEmailError, emailErrorText] = useValidateEmail(formValues);
  const [isPassError, passErrorText] = useValidatePassword(formValues);
  const [isFormError, setIsFormError] = useState(false);
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
    const { email, password } = formValues;
    dispatch(authOperations.logInOperation({ email, password }));
    setFormValues(initState);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        Sign in
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          variant="standard"
          error={isFormError && isEmailError}
          helperText={isFormError && emailErrorText}
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
          error={isFormError && isPassError}
          helperText={isFormError && passErrorText}
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
          Enter
        </LoadingButton>
      </form>
      <p>
        Don't have an account?
        <SignupLoginLink to="/signup" state={{ from: location }}>
          Create account
        </SignupLoginLink>
      </p>
    </>
  );
};

export default LoginForm;
