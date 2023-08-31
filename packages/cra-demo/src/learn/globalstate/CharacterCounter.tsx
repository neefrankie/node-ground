import { ChangeEvent } from 'react';
import { atom, useRecoilState, selector, useRecoilValue } from 'recoil';

const textState = atom({
  key: 'textState',
  default: '',
});

const charCountState = selector({
  key: 'charCountState',
  get: ({get})  => {
    const text = get(textState);

    return text.length;
  },
});

export function CharacterCounter() {
  return (
    <div className='mt-3 mb-3'>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  return (
    <div>
      <input 
        type="text" 
        value={text}
        onChange={onChange}
      />
      <br />
      Echo: {text}
    </div>
  )
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
