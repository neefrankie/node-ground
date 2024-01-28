import React from 'react';
import { Messenger } from '../learn/Chat';
import { CityQuizForm } from '../learn/CityQuiz';
import { NameForm } from '../learn/NameForm';
import { Accordion } from '../learn/ShareState';
import { Page } from '../learn/LevelContext';
import { TaskApp } from '../learn/task/TaskApp';

export function LearnPage() {
  return (
    <div className='container mt-3'>
      <div className='row justify-content-center'>
        <div className='col-lg-8 col-xl-6'>
          <h2 className="text-center">Manging State</h2>
          <CityQuizForm />
          <NameForm />
          <Accordion />
          <Messenger />
          <Page />
          <TaskApp />

          <h2>Escape Hatches</h2>
        </div>
      </div>
    </div>
  );
}

