import { useReducer } from 'react'
import { Contact, contacts } from './Contact';

type State = {
  selectedId: number;
  messages: Record<number, string>;
}

type Action = {
  type: 'changed_selection' | 'edited_message' | 'sent_message';
  contactId: number;
  message: string;
}

const initialState: State = {
  selectedId: 0,
  messages: {
    0: 'Hello, Taylor',
    1: 'Hello, Alice',
  },
};

function messengerReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }

    case 'edited_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        }
      }
    }

    case 'sent_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: '',
        },
      };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function ContactList(
  props: {
    contacts: Contact[];
    selectedId: number;
    dispatch: (action: Action) => void;
  }
) {
  return (
    <section className='contact-list'>
      <ul className='list-group'>
        {props.contacts.map(contact =>
          <li 
            key={contact.id}
            className='list-group-item d-grid'
          >
            <button 
              onClick={() => {
                props.dispatch({
                  type: 'changed_selection',
                  contactId: contact.id,
                  message: '',
                });
              }}
              className='btn btn-light'
            >
              {
                props.selectedId === contact.id ? 
                <b>{contact.name}</b> : 
                contact.name
              }
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}

function Chat(
  props: {
    contact: Contact;
    message: string;
    dispatch: (action: Action) => void;
  }
) {
  return (
    <section className='chat'>
      <textarea
        value={props.message}
        placeholder={'Chat to ' + props.contact.name}
        onChange={e => props.dispatch({
          type: 'edited_message',
          contactId: props.contact.id,
          message: e.target.value,
        })}
        cols={30}
        rows={10}
      />
      <br/>
      <button
        onClick={() => {
          alert(`Send message to ${props.contact.email}`);
          props.dispatch({
            type: 'edited_message',
            contactId: props.contact.id,
            message: '',
          });
        }}
      >
        Send to {props.contact.email}
      </button>
    </section>
  );
}



export function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div className='d-flex'>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat 
        key={contact?.id}
        message={message}
        contact={contact!}
        dispatch={dispatch}
      />
    </div>
  );
}
