import { useEffect, useState } from 'react';

function StatusBar() {
  const isOnline = useOnlineStatus();

  return <h1>{isOnline ? 'Online' : 'Disconnected'}</h1>
}

function SaveButton() {

  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  )
}

export function StatusApp() {
  return (
    <>
      <StatusBar/>
      <SaveButton/>
    </>
  )
}

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
