import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactsListItem/ContactsListItem';
import { useGetContactsQuery } from '../../redux/contactsApi';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  const { filter } = useSelector(state => state.filter);

  return (
    <List>
      {contacts &&
        contacts
          .filter(({ name }) => name.toLowerCase().includes(filter))
          .map(contact => (
            <ContactListItem contact={contact} key={contact.id} />
          ))}
    </List>
  );
};
