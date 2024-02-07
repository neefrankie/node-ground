import { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input';
import classNames from 'classnames';

export const CheckBox = forwardRef(function (
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
        type='checkbox'
        className={inputCls}
        id={props.name}
        ref={ref}
      />
      {
        props.label &&
        <label 
          className="form-check-label" 
          htmlFor={props.name}
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
