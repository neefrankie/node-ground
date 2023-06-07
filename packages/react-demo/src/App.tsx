import { RecoilRoot } from 'recoil';
import './App.css';
import { TodoList } from './todo/TodoList';
import { QuizForm } from './state/Quiz';
import { NameForm } from './state/NameForm';
import { Accodion } from './state/Pannel';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoList />
        <QuizForm />
        <NameForm />
        <Accodion />
      </div>
    </RecoilRoot>
  );
}

export default App;
