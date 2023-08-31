import { ChangeEvent, useState } from 'react';
import { atom, useRecoilValue, useSetRecoilState, useRecoilState, selector } from 'recoil';

type Task = {
  id: number;
  text: string;
  isComplete: boolean;
};

enum Filter {
  All = 'Show Sll',
  Completed = 'Show Completed',
  Uncompleted = 'Show Uncompleted',
};

const todoListState = atom<Task[]>({
  key: 'TodoList',
  default: [],
});

const todoListFilterState = atom<Filter>({
  key: 'TodoListFilter',
  default: Filter.All,
});

const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case Filter.Completed: {
        return list.filter((item) => item.isComplete);
      }

      case Filter.Uncompleted: {
        return list.filter((item) => !item.isComplete);
      }

      default: {
        return list;
      }
    }
  },
});

const todoListStatsState = selector({
  key: 'TodoListStats',
  get: ({get}) => {
    const todoLilst = get(todoListState);
    const totalNum = todoLilst.length;
    const totalCompletedNum = todoLilst.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;
    
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total item: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem}/>
      ))}
    </>
  );
}

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as Filter);
  }

  return (
    <>
      Filter:
      <select 
        value={filter}
        onChange={updateFilter}
      >
        <option value={Filter.All}>All</option>
        <option value={Filter.Completed}>Completed</option>
        <option value={Filter.Uncompleted}>Uncompleted</option>
      </select>
    </>
  );
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      }
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
      <button
        onClick={addItem}
      >
        Add
      </button>
    </div>
  )
}

function TodoItem(
  props: {
    item: Task
  }
) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === props.item);

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
  }

  return (
    <div>
      <input 
        type="text" 
        value={props.item.text}
        onChange={editItemText}
      />
      <input
        type='checkbox'
        checked={props.item.isComplete}
        onChange={toggleItemCompletion}
      />

      <button onClick={deleteItem}>X</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}

function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index+1)];
}

function removeItemAtIndex<T>(arr: T[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
