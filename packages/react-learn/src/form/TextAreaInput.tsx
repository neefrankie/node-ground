import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { InputBaseProps, InputSlot, toggleInputClass } from './InputSlot';

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  desc?: string;
  error?: string;
}

export const TextAreaInput = forwardRef(function TextAreaInput(
  props: InputBaseProps & InputHTMLAttributes<HTMLTextAreaElement>,
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
