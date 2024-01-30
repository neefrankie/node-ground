import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

export type InputBaseProps = {
  label?: string;
  desc?: string;
  error?: string
};

export type InputProps = InputBaseProps & InputHTMLAttributes<HTMLInputElement>;

export function InputSlot(
  props: {
    id?: string;
    children: JSX.Element;
    className?: string;
  } & InputBaseProps,
) {

  return (
    <div className={`${props.className ? props.className : 'mb-3'}`}>
      {
        props.label &&
        <label 
          htmlFor={props.id} 
          className="form-label"
        >
          {props.label}
        </label>
      }
      
      {props.children}

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
};

export function toggleInputClass(invalid: boolean): string {
  return classNames('form-control', {
    'is-invalid': invalid,
  });
}
