export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export type Action = {
  type: 'added' | 'changed' | 'deleted';
  task: Task;
};

