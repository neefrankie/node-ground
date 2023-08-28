import { useState } from 'react';
import { Contact, contacts as initialContacts } from './Contact';

function EditContact(
  props: {
    initialData: Contact;
    onSave: (c: Contact) => void;
  }
) {
  const [ name, setName ] = useState(props.initialData.name);
  const [ email, setEmail ] = useState(props.initialData.email);

  return (
    <section>
      <div className='mb-3'>
        <label className='form-label'>Name</label>
        <input 
          className='form-control'
          type="text" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Email</label>
        <input 
          className='form-control'
          type="text" 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <button
        onClick={() => {
          const updatedData: Contact = {
            id: props.initialData.id,
            name: name,
            email: email,
          };
          props.onSave(updatedData);
        }}
        className='btn btn-primary'
      >
        Save
      </button>

      <button
        onClick={() => {
          setName(props.initialData.name);
          setEmail(props.initialData.email);
        }}
        className='btn btn-light'
      >
        Reset
      </button>
    </section>
  );
}

function ContactList(
  props: {
    contacts: Contact[];
    selectedId: number,
    onSelect: (id: number) => void;
  }
) {
  return (
    <section>
      <ul className='hstack gap-3'>
        {
          props.contacts.map(contact =>
            <li key={contact.id}>
              <button
                onClick={() => {
                  props.onSelect(contact.id)
                }}
                className='btn btn-outline-secondary'
              >
                {
                  contact.id === props.selectedId ?
                    <b>{contact.name}</b> :
                    contact.name
                }
              </button>
            </li>
          )
        }
      </ul>
    </section>
  );
}

export function ContactManager() {
  const [
    contacts,
    setContacts
  ] = useState(initialContacts);

  const [
    selectedId,
    setSelectedId
  ] = useState(0);

  const selectedContact = contacts.find(c => c.id === selectedId);

  function handleSave(updatedData: Contact) {
    const nextContacts = contacts.map(c => {
      if (c.id == updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });

    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedId}
        initialData={selectedContact!}
        onSave={handleSave}
      />
    </div>
  )
}
