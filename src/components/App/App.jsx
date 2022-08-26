import 'react-toastify/dist/ReactToastify.css';
import { PhoneBookForm } from '../PhoneBookForm/PhoneBookForm';
import { ContactList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { ContactsTitle, Title } from './App.styled';
import { Box } from 'components/Box/Box';

export const App = () => {
  return (
    <Box pt="4" width="1200px" mx="auto" as="main">
      <Title>Phoonebook</Title>
      <PhoneBookForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Box>
  );
};
