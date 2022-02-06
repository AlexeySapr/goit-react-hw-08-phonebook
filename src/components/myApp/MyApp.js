// import Container from 'components/container/Container';
import Section from 'components/section/Section';
import Item from './Item';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from 'components/header/Header';
import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';

const MyApp = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={4}>
            <Item>
              <ContactForm />
            </Item>
          </Grid>
          <Grid item xs={12} sm={7} md={8}>
            <Item>
              <ContactList />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MyApp;
