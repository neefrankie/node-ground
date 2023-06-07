import { RecoilRoot } from 'recoil';
import './App.css';
import { TodoList } from './todo/TodoList';
import { QuizForm } from './state/Quiz';
import { NameForm } from './state/NameForm';
import { Accodion } from './state/Pannel';
import { Messenger } from './state/Chat';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoList />
        <QuizForm />
        <NameForm />
        <Accodion />
        <Messenger />
      </div>
    </RecoilRoot>
  );
}

export default App;
