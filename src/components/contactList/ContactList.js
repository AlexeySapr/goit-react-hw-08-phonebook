import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { selectors } from 'redux/phonebook';
import { useGetContactsQuery } from 'services/contactsAPI';

import { ContactListItem } from '../contactListItem/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(selectors.getFilter);
  const { data: contacts, error } = useGetContactsQuery();

  const normalizedFilter = filter.toLowerCase();

  let filteredContacts = [];
  if (contacts) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  useEffect(() => {
    if (error) {
      toast.error(`Сan't get contacts info from server`);
    }
  }, [error]);

  return (
    <>
      {error && <Toaster />}
      {!error && contacts && (
        <List>
          {filteredContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
