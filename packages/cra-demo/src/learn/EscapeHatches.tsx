import { useEffect, useRef, useState } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toatify.css';

export function Form() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    inputRef?.current?.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  )
}

function VideoPlayer(
  props: {
    src: string;
    isPlaying: boolean;
  }
) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (props.isPlaying) {
      ref?.current?.play();
    } else {
      ref?.current?.pause();
    }
  }, [props.isPlaying]);

  return <video src={props.src} ref={ref} loop playsInline />
}

function VideoApp() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <VideoPlayer
        isPlaying={isPlaying}
        src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
      />
    </>
  )
}



const serverUrl = 'https://localhost:1234';

function createConnect(
  serverUrl: string,
  roomId: string,
) {
  let connectedCallback: () => void;
  let timeout: ReturnType<typeof setTimeout>;

  return {
    connect() {
      timeout = setTimeout(() => {
        if (connectedCallback) {
          connectedCallback();
        }
      }, 100);
    },

    on(event: string, callback: () => void) {
      // if (connectedCallback) {
      //   throw Error('Cannot add the handler twice.');
      // }
      if (event !== 'connected') {
        throw Error('Only "connected" event is supported.');
      }

      connectedCallback = callback;
    },

    disconnect() {
      clearTimeout(timeout);
      console.log(`Disconnected from "${roomId}" room at ${serverUrl}`);
    }
  };
}

function showNotification(
  message: string,
  theme: string,
) {
  Toastify({
    text: message,
    duration: 2000,
    gravity: 'top',
    position: 'right',
    style: {
      background: theme === 'dark' ? 'black' : 'white',
      color: theme === 'dark' ? 'white' : 'black',
    },
  }).showToast();
}

function ChatRoom(
  props: {
    roomId: string;
    theme: string;
  }
) {
  useEffect(() => {
    const connection = createConnect(serverUrl, props.roomId);
    connection.connect();

    return () => connection.disconnect()
  }, [props.roomId]);

  return <h1>Welcome to the chat!</h1>;
}

function ChatApp() {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);

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
      <label>
        <input 
          type="checkbox" 
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom roomId={roomId} theme={isDark ? 'dark' : 'light'} />
    </>
  );
}
