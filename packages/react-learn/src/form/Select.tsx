import { ForwardedRef, OptionHTMLAttributes, SelectHTMLAttributes, forwardRef } from 'react';
import { InputSlot } from './InputSlot';
import { InputSlotProps } from './Input';

export const Select = forwardRef(function Select(
  props: InputSlotProps & {
    options: OptionHTMLAttributes<HTMLSelectElement>[],
  } & SelectHTMLAttributes<HTMLSelectElement>,
  ref?: ForwardedRef<HTMLSelectElement>,
) {
  const {
    label,
    desc,
    error,
    options,
    ...attr
  } = props;

  return (
    <InputSlot
      htmlFor={attr.name}
      label={label}
      desc={desc}
      error={error}
    >
      <select
        {...attr}
        className='form-select'
        id={attr.name}
        ref={ref}
      >
        {
         options.map((opt, i) =>
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
