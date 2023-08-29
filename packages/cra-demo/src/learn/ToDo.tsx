import { useReducer, useState } from 'react';

type Task = {
  id: number,
  text: string;
  done: boolean;
};

type Action = {
  id: number;
  text: string;
  task?: Task;
  type: 'added' | 'changed' | 'deleted';
};

function taskReducer(tasks: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        }
      ];
    }

    case 'changed': {
      return tasks.map((t) => {
        if (action.task && t.id === action.task.id ) {
          return action.task;
        } else {
          return t
        }
      });
    }

    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks: Task[] = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

function AddTask(
  props: {
    onAddTask: (t: string) => void
  }
) {
  const [text, setText] = useState('');

  return (
    <div>
      <input 
        type="text" 
        placeholder='Add task' 
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <button
        onClick={() => props.onAddTask(text)}
      >
        Add
      </button>
    </div>
  )
}

function TaskList(
  props: {
    tasks: Task[];
    onChangeTask: (t: Task) => void;
    onDeleteTask: (id: number) => void;
  }
) {

  return (
    <ul>
      {
        props.tasks.map((t) =>
          <TaskListItem
            key={t.id}
            task={t}
            onChangeTask={props.onChangeTask}
            onDeleteTask={props.onDeleteTask}
          />
        )
      }
    </ul>
  )
}

function TaskListItem(
  props: {
    task: Task;
    onChangeTask: (t: Task) => void;
    onDeleteTask: (id: number) => void;
  }
) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(props.task.text);

  return (
    <li>
      <label className='d-flex'>
        <input 
          type="checkbox" 
          checked={props.task.done} 
          onChange={() => props.onChangeTask({
            ...props.task, 
            done: !props.task.done
          })}
        />
        {
          editing ?
          <input 
            className='flex-fill'
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
          /> :
          <span className='flex-fill'>{props.task.text}</span>
        }

        <span>
          {
            editing ?
            <button
              onClick={() => {
                setEditing(false);
                props.onChangeTask({
                  ...props.task,
                  text,
                })
              }}
              className='btn btn-primary'
            >
              Save
            </button> :
            <button
              onClick={() => setEditing(true)}
              className='btn btn-primary'
            >
              Edit
            </button>
          }
          
          <button 
            onClick={() => props.onDeleteTask(props.task.id)}
            className='btn btn-danger'
          >
            Delete
          </button>
        </span>

      </label>
    </li>
  );
}

export function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    });
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: 'changed',
      id: task.id,
      text: task.text,
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      id: taskId,
      text: '',
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}
