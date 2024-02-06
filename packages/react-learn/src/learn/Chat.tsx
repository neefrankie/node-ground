import { useState } from 'react';

// Preserving and resetting state
// When you re-render a component, React needs to decide which parts of the tree
// to keep and update, and which parts to discard or re-create from scratch.
// In this caht app, typing a message and then switches the recipient does not
// reset the input.
// React lets you override the default behavior, and force a component to reset
// its state by passing it a different key, like <Chat key={email}>.
// This tells React that if the recipient is different, it should be considered
// a different Chat component that needs to be re-created from scratch with teh new data.
export function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <>
      <h2 className='mt-3'>Chat</h2>
      <div className='row'>
        
        <div className='col-md-4'>
          <ContactList
            contacts={contacts}
            selectedContact={to}
            onSelect={contact => setTo(contact)}
          />
        </div>

        <section className='col-md-8'>
          <Chat
            key={to.email}
            contact={to}
          />
        </section>
      </div>
    </>
  );
}

type Contact = {
  name: string;
  email: string;
};

const contacts: Contact[] = [
  {
    name: 'Taylor',
    email: 'taylor@mail.com',
  },
  {
    name: 'Alice',
    email: 'alice@mail.com',
  },
  {
    name: 'Bob',
    email: 'bobo@mail.com',
  }
];

function ContactList(props: {
  selectedContact: Contact;
  contacts: Contact[];
  onSelect: (c: Contact) => void;
}) {
  return (
    <div className='list-group'>
      {props.contacts.map(contact =>
        <ListGroupItem
          key={contact.email}
          onClick={() => {
            props.onSelect(contact);
          }}
          isActive={props.selectedContact.email === contact.email}
        >
          <>{contact.name}</>
        </ListGroupItem>
      )}
    </div>
  );
}

function ListGroupItem(
  props: {
    isActive: boolean;
    children: JSX.Element;
    onClick: () => void;
  }
) {
  return (
    <button
      type='button'
      className={`list-group-item list-group-item-action${props.isActive ? ' active' : ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>  
  );
}


function Chat(
  props: {
    contact: Contact;
  }
) {
  const [text, setText] = useState('');

  return (
    <>
      <div>
        <textarea
          className='form-control'
          value={text}
          placeholder={'Chat to ' + props.contact.name}
          onChange={e => setText(e.target.value)}
          rows={10}
        />
      </div>
      <div className='d-grid mt-3'>
        <button
          className='btn btn-primary'
        >
          Send to {props.contact.name}
        </button>
      </div>
    </>
  );
}
