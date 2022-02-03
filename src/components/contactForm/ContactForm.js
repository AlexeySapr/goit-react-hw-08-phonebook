import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'services/contactsAPI';

import {
  FormContacts,
  InputLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts, error: contactsError } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleNameChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const ressetForm = () => {
    setName('');
    setNumber('');
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

    if (contactsError) {
      toast.error(`Server not responding`);
      return;
    }

    if (isInContacts({ name, number })) {
      toast.error('This contact already exists', {
        duration: 3000,
        position: 'top-center',
      });
      return;
    }

    addContact({ name, phone: number });
    toast.success(`Contact ${name} successfully added`);
    ressetForm();
  };

  return (
    <FormContacts onSubmit={onSubmit}>
      <InputLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputLabel>
      <Toaster />
      <InputLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          value={number}
          onChange={handleNameChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputLabel>
      <FormButton type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add contact'}
      </FormButton>
    </FormContacts>
  );
};

export default ContactForm;
