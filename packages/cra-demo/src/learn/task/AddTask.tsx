import { useContext, useState } from 'react'
import { TasksDispatchContext } from './TaskContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);

  return (
    <>
      <input 
        type="text"
        placeholder='Add task'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');

          dispatch && dispatch({
            type: 'added',
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
    </>
  )
}

let nextId = 3;
