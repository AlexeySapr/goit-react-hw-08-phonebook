import { useState } from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

const initState = { email: '', password: '' };

const LoginForm = () => {
  const [formValues, setFormValues] = useState(() => initState);

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log('formValues: ', formValues);
    setFormValues(initState);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        Log in
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
          Enter
        </LoadingButton>
      </form>
      <p>Don't have an account? Create account</p>
    </>
  );
};

export default LoginForm;
