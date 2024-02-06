import { SubmitHandler, useForm } from 'react-hook-form';
import { DateTimeInput } from '../form/DateTimeInput';
import { PeriodLen } from '../form/PeriodLen';
import { SubmitButton } from '../form/SubmitButton';
import { sleep } from '../util/sleep';
import { useRef } from 'react';
import { DateParts, DateTime } from '../util/datetime';

type IDateForm = {
  yearCount: number;
  monthCount: number;
  dayCount: number;
  date: string;
  time: string;
  zone: string;
};

export function DateForm() {

  const dtParts = useRef<DateParts>(DateTime.now().toParts());

  const {
    register,
    handleSubmit,
    formState
  } = useForm<IDateForm>({
    defaultValues: {
      yearCount: 1,
      monthCount: 1,
      dayCount: 0,
      date: dtParts.current.date,
      time: dtParts.current.time,
      zone: dtParts.current.zone,
    }
  });

  const {
    isSubmitting
  } = formState;

  const onSubmit: SubmitHandler<IDateForm> = (data) => {
    console.log(data);
    return sleep(200);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mb-5'>
      <PeriodLen
        title='Period Count'
        year={{
          label: 'Years',
          ...register('yearCount'),
        }}
        month={{
          label: 'Months',
          ...register('monthCount'),
        }}
        day={{
          label: 'Days',
          ...register('dayCount'),
        }}
        desc='How many years, months, or days user will get for this price'
      />

      <DateTimeInput
        title='Start Ddate Time'
        date={{
          label: 'Date',
          ...register('date'),
        }}
        time={{
          label: 'Month',
          ...register('time')
        }}
        zone={{
          label: 'Zone',
          ...register('zone'),
          readOnly: true,
        }}
      />

      <SubmitButton
        isDirty={true}
        isValid={true}
        isSubmitting={isSubmitting}
        text='Save'
      />    
    </form>
  )
}
