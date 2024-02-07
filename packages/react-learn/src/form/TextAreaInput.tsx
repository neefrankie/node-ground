import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { InputSlot } from './InputSlot';
import { InputSlotProps } from './Input';
import { toggleInputClass } from './toggleInputClass';

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  desc?: string;
  error?: string;
}

export const TextAreaInput = forwardRef(function TextAreaInput(
  props: InputSlotProps & InputHTMLAttributes<HTMLTextAreaElement>,
  ref?: ForwardedRef<HTMLTextAreaElement>
) {

  const inputCls = toggleInputClass(!!props.error);

  const {
    label,
    desc,
    error,
    ...attr
  } = props;

  return (
    <InputSlot
      label={label}
      desc={desc}
      error={error}
    >
      <textarea
        className={inputCls}
        {...attr}
        ref={ref}
      />
    </InputSlot>
  );
})
