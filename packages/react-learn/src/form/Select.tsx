import { ForwardedRef, OptionHTMLAttributes, SelectHTMLAttributes, forwardRef } from 'react';
import { InputBaseProps, InputSlot } from './InputSlot';

export const Select = forwardRef(function Select(
  props: InputBaseProps & {
    options: OptionHTMLAttributes<HTMLSelectElement>[],
  } & SelectHTMLAttributes<HTMLSelectElement>,
  ref?: ForwardedRef<HTMLSelectElement>,
) {
  return (
    <InputSlot
      labelFor={props.name}
      label={props.label}
      desc={props.desc}
      error={props.error}
    >
      <select
        {...props}
        className='form-select'
        id={props.name}
        ref={ref}
      >
        {
          props.options.map((opt, i) =>
            <option
              key={i}
              selected={opt.selected}
              disabled={opt.disabled}
              value={opt.value}
            >
              {opt.label}
            </option> 
          )
        }
      </select>
    </InputSlot>
  );
})
