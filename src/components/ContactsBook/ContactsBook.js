import ContactsForm from './ContactsForm/ContactsForm.js';

import ContactsList from './ContactsList/ContactsList.js'

import Filter from "./Filter/Filter.js";

import css from './contactsbook.module.css';

import { useSelector } from "react-redux";




function ContactsBook() {
  const contacts = useSelector(state => state.contacts);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactsForm/>
      <div>
        <h2 className={css.title}>Contacts</h2>
        {contacts.length > 0 &&
          <div>
            <Filter/>
            <ul className={css.list}>
              <ContactsList/>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default ContactsBook;