import { useState } from 'react';

type Contact = {
  name: string;
  email: string;
};

function Chat(
  props: {
    contact: Contact;
  }
) {
  const [text, setText] = useState('');

  return (
    <section className='chat'>
      <div>
        <textarea
          value={text}
          placeholder={'Chat to ' + props.contact.name}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <button>Send to { props.contact.email }</button>
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
        {
          props.contacts.map(contact => (
            <li key={contact.email}>
              <button
                onClick={() => {
                  props.onSelect(contact)
                }}
              >
                {contact.name}
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

const contacts: Contact[] = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

export function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      {/* Use key to reset state. */}
      <Chat key={to.email} contact={to} />
    </div>
  );
}
