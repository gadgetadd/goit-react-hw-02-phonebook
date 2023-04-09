import { Component } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AppTitle, SectionTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = newContact => {
    const isExists = this.state.contacts.some(
      contact => contact.name === newContact.name
    );
    if (isExists) {
      return Report.info(
        'Enter correct information',
        `${newContact.name} is already in contacts`,
        'Ok'
      );
    }
    this.setState(({ contacts }) => {
      return { contacts: [...contacts, newContact] };
    });
  };

  deleteHandler = contactId => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== contactId) };
    });
  };

  filterHandler = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  render() {
    const filter = this.state.filter.toLowerCase();
    const contacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <SectionTitle>Contacts</SectionTitle>
        <Filter value={this.state.filter} onChange={this.filterHandler} />
        <ContactList contacts={contacts} onDelete={this.deleteHandler} />
      </>
    );
  }
}
