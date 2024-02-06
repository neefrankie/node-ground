import { InputHTMLAttributes } from 'react';
import { FormText, InputProps } from './InputSlot';
import { TextInput } from './TextInput';

type PeriodLenProps = {
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export function PeriodLen(
  props: {
    title: string;
    year: PeriodLenProps;
    month: PeriodLenProps;
    day: PeriodLenProps;
    desc?: string;
  }
) {

  return (
    <fieldset className="mb-3">
      <legend>{props.title}</legend>
      <div className="row row-cols-3">
        <TextInput
          {...props.year}
          type="number"
          className="col"
        />
        <TextInput
          {...props.month}
          type="number"
          className="col"
        />
        <TextInput
          {...props.day}
          type="number"
          className="col"
        />
      </div>
      {
        props.desc &&
        <FormText>
          {props.desc}
        </FormText>
      }
    </fieldset>
  )
}
