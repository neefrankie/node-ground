import React from 'react';
import { Messenger } from '../learn/Chat';
import { CityQuizForm } from '../learn/CityQuiz';
import { NameForm } from '../learn/NameForm';
import { Accordion } from '../learn/ShareState';
import { Page } from '../learn/LevelContext';
import { TaskApp } from '../learn/task/TaskApp';

export function StatePage() {
  return (
    <div className='container'>
      <div className='row'>
        <h4 className="text-center">Manging State</h4>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <CityQuizForm />
          <NameForm />
          <Accordion />
        </div>
        <div className='col-md-6'>
          <Messenger />
          <Page />
          <TaskApp />
        </div>
      </div>
    </div>
  );
}

