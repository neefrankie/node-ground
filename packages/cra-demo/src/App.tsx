import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './learn/Panel';
import SyncedInputs from './learn/SyncedInputs';
import { Scoreboard } from './learn/Counter';
import { Messenger } from './learn/Chat';
import { Hint } from './learn/Hint';
import { SwapFields } from './learn/SwapFields';
import { ContactManager } from './learn/EditContact';
import { TaskApp } from './learn/ToDo';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> 
      </div>

      <Accordion />
      <SyncedInputs />

      <Scoreboard />

      <Messenger />

      <Hint />

      <SwapFields />

      <ContactManager />

      <TaskApp />
    </>
  );
}

export default App;
