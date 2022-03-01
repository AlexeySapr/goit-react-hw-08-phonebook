import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ItemBox from 'components/itemBox/ItemBox.styled';
import SignupForm from 'components/signupForm/SignupForm';

const Signup = () => {
  return (
    <Container maxWidth="lg">
      <Grid item xs={12} sm={6} md={6} sx={{ margin: '0 auto' }}>
        <ItemBox>
          <SignupForm />
        </ItemBox>
      </Grid>
    </Container>
  );
};

export default Signup;
