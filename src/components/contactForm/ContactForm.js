import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'services/contactsAPI';

import { FormContacts } from './ContactForm.styled';

import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import PhoneMaskCustom from 'components/phoneMaskCustom/PhoneMaskCustom';

const initState = { name: '', phone: '' };

const ContactForm = () => {
  const [formValues, setFormValues] = useState(() => initState);

  const { data: contacts, error: contactsError } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const isInContacts = ({ name, phone }) => {
    const normalizedName = name.toLowerCase().replace(/\s+/g, '');
    const normalizedNumber = phone.replace(/\D/g, '');
    return contacts.some(contact => {
      return (
        contact.name.toLowerCase().replace(/\s+/g, '') === normalizedName ||
        contact.phone.replace(/\D/g, '') === normalizedNumber
      );
    });
  };
  const onSubmit = event => {
    event.preventDefault();

    console.log('formValues: ', formValues);

    if (contactsError) {
      toast.error(`Server not responding`);
      return;
    }

    if (isInContacts(formValues)) {
      toast.error('This contact already exists', {
        duration: 5000,
        position: 'top-center',
      });
      return;
    }

    addContact(formValues);
    toast.success(`Contact ${formValues.name} successfully added`);
    setFormValues(initState);
  };

  return (
    <FormContacts onSubmit={onSubmit}>
      <TextField
        id="standard-basic"
        label="Name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        inputProps={{
          inputMode: 'text',
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          title: 'Name may contain only letters, apostrophe, dash and spaces.',
        }}
        variant="standard"
        sx={{ mb: 2 }}
        fullWidth
        required
      />
      <TextField
        id="standard-basic"
        label="Phone"
        name="phone"
        value={formValues.phone}
        onChange={handleChange}
        InputProps={{
          inputMode: 'tel',
          inputComponent: PhoneMaskCustom,
        }}
        variant="standard"
        sx={{ mb: 2 }}
        fullWidth
        required
      />
      <LoadingButton
        type="submit"
        loading={isLoading}
        disabled={isLoading}
        loadingIndicator="Adding..."
        variant="outlined"
      >
        Add contact
      </LoadingButton>
    </FormContacts>
  );
};

export default ContactForm;
