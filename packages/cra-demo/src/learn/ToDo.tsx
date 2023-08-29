import { useReducer, useState } from 'react';

type Task = {
  id: number,
  text: string;
  done: boolean;
};

type Action = {
  id: number;
  text: string;
  task: Task;
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
        if (t.id === action.task.id) {
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
  const [editingId, setEditingId] = useState(-1);

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
      <label>
        <input type="checkbox" checked={props.task.done} />
        {
          editing ?
          <input 
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
          /> :
          props.task.text
        }
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
          >
            Save
          </button> :
          <button
            onClick={() => setEditing(true)}
          >
            Edit
        </button>
        }
        
        <button 
          onClick={() => props.onDeleteTask(props.task.id)}
        >
          Delete
        </button>
      </label>
    </li>
  );
}

export function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);
  // const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      }
    ]);
  }

  function handleChangeTask(task: Task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter((t) => t.id !== taskId));
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
