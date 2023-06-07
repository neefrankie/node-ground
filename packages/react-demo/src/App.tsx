import { RecoilRoot } from 'recoil';
import './App.css';
import { TodoList } from './todo/TodoList';
import { QuizForm } from './state/Quiz';
import { NameForm } from './state/NameForm';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoList />
        <QuizForm />
        <NameForm />
      </div>
    </RecoilRoot>
  );
}

export default App;
