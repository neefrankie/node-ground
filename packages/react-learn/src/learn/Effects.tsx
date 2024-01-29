import React, { useEffect, useRef, useState } from 'react';

// Effect let you run some code after rendering.
// Use them to synchronize your compnent with a system outside of React.
function VideoPlayer(
  props: {
    src: string,
    isPlaying: boolean;
  }
) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (props.isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [props.isPlaying]);

  return (
    <div className='ratio ratio-16x9'>
      <video ref={ref} src={props.src} loop playsInline />
    </div>
  );
}

function VideoApp() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='mt-3'>
      <button
        className='btn btn-primary btn-sm'
        onClick={() => setIsPlaying(!isPlaying)}
      >
        { isPlaying ? 'Pause' : 'Play' }
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
      />
    </div>
  );
}

// Many effects also clean up after themeselves.
// In development, React will immediately run and clean up your effect on extra time.
// This ensures you don't forget to implement the cleanup function.
export function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return <h1>Welcome to the chat!</h1>
}

function createConnection() {
  return {
    connect() {
      console.log('Connection...');
    },
    disconnect() {
      console.log('Disconnected.');
    }
  }
}

// Lifecycle of reactive effects
// An Effects can only do two things:
// to start syncrhonizing something, and later to stop synchronizing it.
// This cycle can happen multiple times if your Effect depends on props and state
// that change over time.
