import { TasksProvider } from './TasksContext';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';

export function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  )
}
