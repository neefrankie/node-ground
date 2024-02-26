import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { ILoginValues } from '../../schema/auth';
import { sleep } from '../../util/sleep';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<ILoginValues> = async(data) => {
    setIsLoading(true);

    console.log(data);
    await sleep(2000);

    setIsLoading(false);
  };


  return {
    isLoading,
    onSubmit,
  }
}
