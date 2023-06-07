import { ChangeEvent, FormEvent, useState } from 'react';

export function QuizForm() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err: any) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that returns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City</label>
        </div>
        <div>
          <textarea
            id="city"
            name="city"
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === 'submitting'}
          />
        </div>
        <button
          disabled={
            answer.length === 0 || status === 'submitting'
          }
        >
          Submit
        </button>
        {
          error !== null &&
          <p className="Error">{error.message}</p>
        }
      </form>
    </>
  );
}

async function submitForm(city: string) {
  
}
