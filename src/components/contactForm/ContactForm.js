import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'services/contactsAPI';

import { FormContacts, FormButton } from './ContactForm.styled';

import TextField from '@mui/material/TextField';
import PhoneMaskCustom from 'components/myApp/PhoneMaskCustom';

const initState = { name: '', number: '' };

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

  const isInContacts = ({ name, number }) => {
    const normalizedName = name.toLowerCase().replace(/\s+/g, '');
    const normalizedNumber = number.replace(/\D/g, '');
    return contacts.some(contact => {
      return (
        contact.name.toLowerCase().replace(/\s+/g, '') === normalizedName ||
        contact.phone.replace(/\D/g, '') === normalizedNumber
      );
    });
  };
  const onSubmit = event => {
    event.preventDefault();

    // if (contactsError) {
    //   toast.error(`Server not responding`);
    //   return;
    // }

    // if (isInContacts({ name, number })) {
    //   toast.error('This contact already exists', {
    //     duration: 3000,
    //     position: 'top-center',
    //   });
    //   return;
    // }

    // addContact({ name, phone: number });
    // toast.success(`Contact ${name} successfully added`);
    // ressetForm();
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
        fullWidth
        required
      />
      <Toaster />
      <TextField
        id="standard-basic"
        label="Phone"
        name="number"
        value={formValues.number}
        onChange={handleChange}
        InputProps={{
          inputMode: 'tel',
          inputComponent: PhoneMaskCustom,
        }}
        variant="standard"
        fullWidth
        required
      />
      <FormButton type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add contact'}
      </FormButton>
    </FormContacts>
  );
};

export default ContactForm;
