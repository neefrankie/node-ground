import { createContext, useContext, useReducer } from 'react';
import { Action, Task } from './task';

type TaskDispatcher = (a: Action) => void;

export const TasksContext = createContext<Task[] | null>(null);
export const TasksDispatchContext = createContext<TaskDispatcher | null>(null);

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

export function TasksProvider(
  props: {
    children: JSX.Element[] | JSX.Element;
  }
) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {props.children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(tasks: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        action.task,
      ];
    }

    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task?.id) {
          return action.task
        } else {
          return t;
        }
      });
    }

    case 'deleted': {
      return tasks.filter(t => t.id !== action.task.id);
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks: Task[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
