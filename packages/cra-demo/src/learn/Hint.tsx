import { useState } from 'react';

export function Hint() {
  const [ showHint, setShowHint ] = useState(false);

  return (
    <div>
      {
        showHint && <p><i>Hint: Your favorite city?</i></p>
      }

      <Form />

      <button onClick={() => {
        setShowHint(!showHint);
      }} className='btn btn-primary'>
        Hide hint
      </button>
    </div>
  )
}

function Form() {
  const [text, setText] = useState('');

  return (
    <div className='mb-3'>
      <textarea 
        rows={10} 
        value={text}
        onChange={e => setText(e.target.value)}
        className='form-control'
      />
    </div>
  );
}
