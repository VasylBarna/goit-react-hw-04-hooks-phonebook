import { useState } from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList';
import styles from './App.module.scss';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';
import saveContacts from './data/saveContacts.json';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', saveContacts);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (findContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId),
    );
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilterContact = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredContacts;
  };

  return (
    <Container>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={styles.subtitle}>Contacts</h2>
      <Filter onChange={handleFilter} filter={filter} />
      <ContactsList
        friends={getFilterContact()}
        onDeleteContacts={deleteContact}
      />
    </Container>
  );
}
