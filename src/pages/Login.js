import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ItemBox from 'components/itemBox/ItemBox.styled';
import LoginForm from 'components/loginForm/LoginForm';

const Login = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <ItemBox>
            <LoginForm />
          </ItemBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6}></Grid>
      </Grid>
    </Container>
  );
};

export default Login;
