import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'services/contactsAPI';
import {
  useValidateName,
  useValidatePhone,
} from 'components/utils/validateHooks/ValidateHooks';
import PhoneMaskCustom from 'components/phoneMaskCustom/PhoneMaskCustom';

import { FormContacts } from './ContactForm.styled';

const initState = { name: '', number: '' };

const ContactForm = () => {
  const [formValues, setFormValues] = useState(() => initState);
  const [isNameError, nameErrorText] = useValidateName(formValues);
  const [isPhoneError, phoneErrorText] = useValidatePhone(formValues);
  const [isFormError, setIsFormError] = useState(false);

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { data: addedContact, isLoading, isSuccess, isError }] =
    useAddContactMutation();

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
        contact.number.replace(/\D/g, '') === normalizedNumber
      );
    });
  };

  const onSubmit = async event => {
    event.preventDefault();

    if (isInContacts(formValues)) {
      toast.error('This contact already exists', {
        duration: 5000,
        position: 'top-center',
      });
      return;
    }

    if (isNameError || isPhoneError) {
      setIsFormError(true);
      return;
    }

    setIsFormError(false);
    addContact(formValues);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Contact ${addedContact.name} successfully added`);
      setFormValues(initState);
    }
  }, [addedContact, isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error('Oops, something went wrong...');
    }
  }, [isError]);

  return (
    <FormContacts onSubmit={onSubmit}>
      <TextField
        id="standard-basic"
        label="Name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        variant="standard"
        error={isFormError && isNameError}
        helperText={isFormError && nameErrorText}
        sx={{ mb: 2 }}
        fullWidth
        required
      />
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
        error={isFormError && isPhoneError}
        helperText={isFormError && phoneErrorText}
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
