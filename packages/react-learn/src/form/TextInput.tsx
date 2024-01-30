import React, { ForwardedRef, forwardRef } from 'react';
import { InputProps, InputSlot, toggleInputClass } from './InputSlot';

export const TextInput = forwardRef(function TextControl(
  props: InputProps,
  ref?: ForwardedRef<HTMLInputElement>
) {

  const inputCls = toggleInputClass(!!props.error);

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

