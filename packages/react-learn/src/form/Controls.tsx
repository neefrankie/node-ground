import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  desc?: string;
  error?: string;
}

export const TextInput = forwardRef(function TextControl(
  props: InputProps,
  ref?: ForwardedRef<HTMLInputElement>
) {

  let cls = 'form-control';
  if (props.error) {
    cls += ' is-invalid';
  }

  return (
    <div className="mb-3">
      {
        props.label &&
        <label 
          htmlFor={props.name} 
          className="form-label"
        >
          {props.label}
        </label>
      }
      
      <input
        className={cls}
        {...props}
        ref={ref}
      />

      {
        props.desc &&
        <div className="form-text">{props.desc}</div>
      }
      {
        props.error &&
        <div className="invalid-feedback">{props.error}</div>
      }
    </div>
  );
});

export function TextAreaControl(
  props: {
    name: string;
    label?: string;
    value: string;
    disabled?: boolean;
    onChange: (v: string) => void;
  },
) {
  return (
    <div className='mb-3'>
      {
        props.label &&
        <label 
          htmlFor={props.name} 
          className="form-label"
        >
          {props.label}
        </label>
      }
      <textarea
        className='form-control'
        id={props.name}
        rows={3}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        disabled={props.disabled}
      />
    </div>
  );
}

export function CheckOrRadio(
  props: {
    name: string;
    type: 'checkbox' | 'radio';
    label?: string;
    checked?: boolean;
    disabble?: boolean;
    onChange: (v: boolean) => void;
  },
) {
  return (
    <div className="mb-3 form-check">
      <input 
        type={props.type}
        className="form-check-input" 
        id={props.name} 
        name={props.name}
        checked={props.checked}
        onChange={() => {
          props.onChange(!props.checked);
        }}
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
    </div>
  );
}
