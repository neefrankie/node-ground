import { ForwardedRef, forwardRef } from 'react';
import { InputSlot } from './InputSlot';
import { InputProps } from './Input';
import { Input } from './Input';

export const TextInput = forwardRef(function TextControl(
  props: InputProps,
  ref?: ForwardedRef<HTMLInputElement>
) {

// If props is a flattened object, and used with spead operator
// in input: {...props}, it will introduct our extra
// properties to to input tag. One approach is to define an
// extra key containing all InputHTMLAttributes.
// Another way is use the rest operator like this:
  const {
    label,
    desc,
    error,
    ...attr
  } = props;
// attr will contain all InputHTMLAttributes without label,
// desc, error fields.

  return (
    <InputSlot
      htmlFor={attr.name}
      label={label}
      desc={desc}
      error={error}
    >
      <Input
        {...attr}
        id={props.name}
        ref={ref}
      />
    </InputSlot>
  );
});

