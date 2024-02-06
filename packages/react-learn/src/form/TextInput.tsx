import { ForwardedRef, forwardRef } from 'react';
import { InputProps, InputSlot, toggleInputClass } from './InputSlot';

export const TextInput = forwardRef(function TextControl(
  props: InputProps,
  ref?: ForwardedRef<HTMLInputElement>
) {

  const inputCls = toggleInputClass(!!props.error);

// If props is a flattened object, and used with spead operator
// in input: {...props}, it will introduct our extra
// properties to to input tag. One approach is to define an
// extra key containing all InputHTMLAttributes.
// Another way is use the rest operator like this:
//   const {
//     label,
//     desc,
//     error,
//     ...attr
//   } = props;
// attr will contain all InputHTMLAttributes without label,
// desc, error fields.

  return (
    <InputSlot
      labelFor={props.name}
      label={props.label}
      desc={props.desc}
      error={props.error}
    >
      <input
        {...props}
        className={inputCls}
        id={props.name}
        ref={ref}
      />
    </InputSlot>
  );
});

