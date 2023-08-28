import { useState } from 'react'
import { Contact, contacts } from './Contact';

function Chat(
  props: {
    contact: Contact;
  }
) {
  const [text, setText] = useState('');

  return (
    <section className='chat'>
      <textarea
        value={text}
        placeholder={'Chat to ' + props.contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br/>
      <button>Send to {props.contact.email}</button>
    </section>
  );
}

function ContactList(
  props: {
    selectedContact: Contact;
    contacts: Contact[];
    onSelect: (c: Contact) => void;
  }
) {
  return (
    <section className='contact-list'>
      <ul>
        {props.contacts.map(contact =>
          <li key={contact.id}>
            <button onClick={() => {
              props.onSelect(contact)
            }}>
              {contact.name}
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}

export function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </div>
  );
}
