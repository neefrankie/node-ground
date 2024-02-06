import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { InputProps } from './InputSlot';

export const Radio = forwardRef(function (
  props: Omit<InputProps, 'type' | 'desc'>,
  ref?: ForwardedRef<HTMLInputElement>
) {

  const inputCls = classNames('form-check-input', {
    'is-invalid': !!props.error,
  });
  
  return (
    <div className="mb-3 form-check">
      <input
        {...props}
        type='radio'
        className={inputCls}
        ref={ref}
      />
      {
        props.label &&
        <label 
          className="form-check-label" 
          htmlFor={props.id}
        >
          {props.label}
        </label>
      }
      {
        props.error &&
        <div className="invalid-feedback">{props.error}</div>
      }
    </div>
  );
});
