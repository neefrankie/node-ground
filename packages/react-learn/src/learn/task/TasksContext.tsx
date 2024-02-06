import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';
import { Action, Task, tasksReducer } from './task';

const TasksContext = createContext<Task[]>([]);
const TasksDispatchContext = createContext<Dispatch<Action> | null>(null);

export function TasksProvider(props: { 
  children: ReactNode,
}) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTask,
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {props.children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

const initialTask: Task[] = [
  {
    id: 0,
    text: 'Visit Kafka Museum',
    done: true,
  },
  {
    id: 1,
    text: 'Watch a puppet show',
    done: true,
  },
  {
    id: 2,
    text: 'Lennon Wall Pic',
    done: true,
  },
];
