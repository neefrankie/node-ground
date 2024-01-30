import { useState, FormEvent } from 'react';
import { TextAreaControl } from '../form/Controls';
import React from 'react';

// Reacting to input with state
export function CityQuizForm() {
  const [ answer, setAnswer ] = useState('');
  const [ error, setError ] = useState<Error | null>(null);
  const [ status, setStatus ] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    try {
      await submitForm(answer);
      setStatus('success');
    } catch(err: any) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(v: string) {
    setAnswer(v);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>

      <form onSubmit={handleSubmit}>
        <TextAreaControl
          name="guessCity"
          disabled={status === 'submitting'}
          value={answer}
          onChange={handleTextareaChange}
        />

        <button
          disabled={answer.length === 0 || status === 'submitting'}
          className='btn btn-primary'
        >
          Submit
        </button>

        { error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() != 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve(null);
      }
    }, 1500);
  });
}
