import { InputHTMLAttributes } from 'react';
import { FormText } from './InputSlot';
import { TextInput } from './TextInput';

type DateTimeProps = {
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export function DateTimeInput(
  props: {
    title: string;
    date: DateTimeProps;
    time: DateTimeProps;
    zone: DateTimeProps;
    desc?: string;
  }
) {
  return (
    <fieldset className="mb-3">
      <legend>{props.title}</legend>
      <div className="row row-cols-3">
        <TextInput
          {...props.date}
          type="date"
          className="col"
        />
        <TextInput
          {...props.time}
          type="time"
          className="col"
        />
        <TextInput
          {...props.zone}
          type="text"
          className='col'
        />
      </div>
      {
        props.desc &&
        <FormText>
          {props.desc}
        </FormText>
      }
    </fieldset>
  );
}
