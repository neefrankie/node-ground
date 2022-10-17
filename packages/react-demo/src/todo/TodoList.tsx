import {ChangeEvent, useState} from 'react';
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';

let id = 0;

function getId() {
  return id++;
}

type ITodoItem = {
  id: number;
  text: string;
  isComplete: boolean;
};

const todoListState = atom<ITodoItem[]>({
  key: 'TodoList',
  default: [],
});

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

function TodoItem(
  props: {
    item: ITodoItem
  }
) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(listItem => listItem === props.item);

  const editItemText = (e: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      text: e.target.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      isComplete: !props.item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={props.item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={props.item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

function replaceItemAtIndex(arr: ITodoItem[], index: number, newValue: ITodoItem) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: ITodoItem[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem}  />
      ))}
    </>
  );
}
