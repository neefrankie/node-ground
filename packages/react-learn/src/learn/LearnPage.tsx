import React from 'react';
import { Messenger } from './Chat';
import { CityQuizForm } from './CityQuiz';
import { NameForm } from './NameForm';
import { Accordion } from './ShareState';
import { Page } from './LevelContext';
import { TaskApp } from './task/TaskApp';
import { Counter } from './Refs';
import { ChatRoom } from './Effects';
import { Canvas } from './CustomHooks';
import { VideoApp } from './VideoApp';
import { FocusForm } from './ForwardRef';

export function LearnPage() {
  return (
    <>
      <h2 className="text-center">Manging State</h2>
      <CityQuizForm />
      <NameForm />
      <Accordion />
      <Messenger />
      <Page />
      <TaskApp />

      <h2>Escape Hatches</h2>
      <Counter />
      <FocusForm />
      <VideoApp />
      <ChatRoom />
      <Canvas />
    </>
  );
}

