import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { InputSlot, toggleInputClass } from './InputSlot';

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  desc?: string;
  error?: string;
}

export const TextAreaInput = forwardRef(function TextAreaInput(
  props: TextAreaProps,
  ref?: ForwardedRef<HTMLTextAreaElement>
) {

  const inputCls = toggleInputClass(!!props.error);

  return (
    <InputSlot
      {...props}
    >
      <textarea
        className={inputCls}
        {...props}
        ref={ref}
      />
    </InputSlot>
  );
})
