import { Messenger } from './Chat';
import { CityQuizForm } from './CityQuiz';
import { NameForm } from './NameForm';
import { Accordion } from './ShareState';
import { Page } from './LevelContext';
import { TaskApp } from './task/TaskApp';
import { CountDown, CountDownHook, Counter, OverreactedCounter, Stopwatch } from './Refs';
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

      <h2 className='mt-5'>Escape Hatches</h2>
      <Counter />
      <Stopwatch />
      <div className='mt-3 mb-3'>
        <h3>Count Down</h3>
        <CountDown />
      </div>
      <div className='mt-3 mb-3'>
        <h3>Count Down Hook</h3>
        <CountDownHook />
      </div>
      <div className='mt-3 mb-3'>
        <h3>Overreated Counter</h3>
        <OverreactedCounter />
      </div>
      <FocusForm />
      <VideoApp />
      <ChatRoom />
      <Canvas />
    </>
  );
}

