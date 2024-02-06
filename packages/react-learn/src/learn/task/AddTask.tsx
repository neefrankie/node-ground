import { useState } from 'react';
import { ActionType } from './task';
import { useTasksDispatch } from './TasksContext';

export function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch()!;

  return (
    <div className='input-group mb-3'>
      <input
        className='form-control'
        placeholder='Add task'
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button
        className='btn btn-outline-primary'
        type='button'
        onClick={() => {
          setText('');
          dispatch({
            type: ActionType.Added,
            task: {
              id: nextId++,
              text: text,
              done: false,
            }
          })
        }}
      >
        Add
      </button>
    </div>
  );
}

let nextId = 3;
