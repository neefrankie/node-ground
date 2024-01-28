export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export enum ActionType {
  Added = 'added',
  Changed = 'changed',
  Deleted = 'deleted',
}

export type Action = {
  type: ActionType;
  task: Task;
}

export function tasksReducer(tasks: Task[], action: Action) {
  switch (action.type) {
    case ActionType.Added: {
      return [...tasks, {
        id: action.task.id,
        text: action.task.text,
        done: false,
      }];
    }

    case ActionType.Changed: {
      return tasks.map(t => {
        if (t.id == action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case ActionType.Deleted: {
      return tasks.filter(t => t.id !== action.task.id);
    }

    default: {
      throw Error('Unknow action: ' + action.type);
    }
  }
}



