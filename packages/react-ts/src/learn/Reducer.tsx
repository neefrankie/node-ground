import React, { useReducer } from 'react';
import { ActionType, Task, tasksReducer } from './task/task';

export function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTask,
  )

  function handleAddTask(text: string) {
    dispatch({
      type: ActionType.Added,
      task: {
        id: nextId++,
        text: text,
        done: false,
      },
    });
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: ActionType.Changed,
      task: task,
    });
  }

  function handleDeleteTask(task: Task) {
    dispatch({
      type: ActionType.Deleted,
      task,
    });
  }

  return (
    <>
      
    </>
  )
}


let nextId = 3;
export const initialTask: Task[] = [
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
