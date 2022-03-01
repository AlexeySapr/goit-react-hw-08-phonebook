import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ItemBox from 'components/itemBox/ItemBox.styled';
import LoginForm from 'components/loginForm/LoginForm';

const Login = () => {
  return (
    <Container maxWidth="lg">
      <Grid item xs={12} sm={6} md={6} sx={{ margin: '0 auto' }}>
        <ItemBox>
          <LoginForm />
        </ItemBox>
      </Grid>
    </Container>
  );
};

export default Login;
