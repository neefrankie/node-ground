import React, { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext';
import { ActionType, Task } from './task';

export function TaskList() {
  const tasks = useTasks();

  return (
    <ul className='list-group'>
      {tasks.map(task => 
        <li
          className='list-group-item'
          key={task.id}
        >
          <TaskItem task={task} />
        </li>
      )}
    </ul>
  );
}

function TaskItem(props: {
  task: Task,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch()!;

  const id = `task${props.task.id}`;

  return (
    <div className='d-flex'>
      <input
        className='form-check-input'
        type='checkbox'
        checked={props.task.done}
        onChange={e => {
          dispatch({
            type: ActionType.Changed,
            task: {
              ...props.task,
              done: e.target.checked
            }
          });
        }}
      />

      <div className='flex-grow-1'>
        {
          isEditing ?
          <input
            className='form-control'
            value={props.task.text}
            onChange={e => {
              dispatch({
                type: ActionType.Changed,
                task: {
                  ...props.task,
                  text: e.target.value
                }
              })
            }}
          /> : 
          <label htmlFor={id}>{props.task.text}</label>
        }
      </div>

      <div>
        {
          isEditing ?
          <button
            className='btn btn-outline-secondary btn-sm'
            onClick={() => setIsEditing(false)}
          >
            Save
          </button> :
          <button
            className='btn btn-outline-secondary btn-sm'
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        }

        <button
          className='btn btn-outline-secondary btn-sm'
          onClick={() => {
            dispatch({
              type: ActionType.Deleted,
              task: props.task,
            });
          }}
        >
          Delete
        </button>
      </div>

    </div>
  );
}

