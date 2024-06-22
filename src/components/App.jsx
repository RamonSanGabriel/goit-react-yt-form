import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactListItem } from './ContactListItem/ContactListItem';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contact: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = newContact => {
    this.setState(prevState => ({
      contact: [...prevState.contact, newContact],
    }));
  };
  render() {
    const { contact, addContact, newContact } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <form action="">
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
            />
          </label>
        </form>

        <button onClick={this.addContact}>Add Contact</button>

        <h2>Contacts</h2>

        {/* <ContactListItem /> */}
      </div>
    );
  }
}
