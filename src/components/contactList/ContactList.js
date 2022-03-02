import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectors } from 'redux/phonebook';
import { useGetContactsQuery } from 'services/contactsAPI';

import ContactTable from 'components/contactList/ContactTable';

const ContactList = () => {
  const filter = useSelector(selectors.getFilter);
  // const { data: contacts, error } = useGetContactsQuery();
  const { data: contacts, error } = useGetContactsQuery();
  console.log('data: ', contacts);

  const normalizedFilter = filter.toLowerCase();

  let filteredContacts = [];
  if (contacts) {
    const copyContacts = [...contacts];

    filteredContacts = copyContacts
      .sort((prevContact, nextContact) => nextContact.id - prevContact.id)
      .filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  useEffect(() => {
    if (error) {
      toast.error(`Сan't get contacts info from server`);
    }
  }, [error]);

  return (
    <>{!error && contacts && <ContactTable contacts={filteredContacts} />}</>
  );
};

export default ContactList;
