import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ItemBox from 'components/itemBox/ItemBox.styled';

import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import ContactFilter from 'components/contactFilter/ContactFilter';

const UserPage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5} md={4}>
          <ItemBox>
            <ContactForm />
          </ItemBox>
          <ItemBox>
            <ContactFilter />
          </ItemBox>
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
          <ContactList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserPage;
