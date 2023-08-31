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
import { Messenger as Messenger2 } from './learn/Chat2'
import { Page } from './learn/LevelContext';
import { StatusApp } from './learn/hooks/StatusBar';
import { CountDown } from './learn/refs/CountDown';
import { StopWatch } from './learn/refs/StopWatch';
import { RecoilRoot } from 'recoil';
import { CharacterCounter } from './learn/globalstate/CharacterCounter';
import { TodoList } from './learn/globalstate/ToDoList';

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

      <Messenger2 />

      <Page />

      <StatusApp />

      <CountDown start={5} />

      <StopWatch />

      <RecoilRoot>
        <CharacterCounter />

        <TodoList />
      </RecoilRoot>
    </>
  );
}

export default App;
