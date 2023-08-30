import { useEffect, useState } from 'react';

const serverUrl = 'https://localhost:1234';

function createConnect(
  serverUrl: string,
  roomId: string,
) {

  return {
    connect() {
      console.log(`Connecting to "${roomId}" room at ${serverUrl}...`);
    },

    disconnect() {
      console.log(`Disconnected from "${roomId}" room at ${serverUrl}`);
    }
  };
}

function ChatRoom(
  props: {
    roomId: string;
  }
) {
  const [message, setMesage] = useState('');

  useEffect(() => {
    const connection = createConnect(serverUrl, props.roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    }
  }, [props.roomId]);

  function handleSendClick() {
    // sendMessage(message);
  }

  return (
    <>
      <h1>Welcome to the {props.roomId} room!</h1>
      <input 
        type="text" 
        value={message}
        onChange={e => setMesage(e.target.value)}
      />

      <button onClick={handleSendClick}>
        Send
      </button>
    </>
  );
}

function ChatApp() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show  ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
