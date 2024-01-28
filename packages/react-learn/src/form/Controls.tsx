import React, { HTMLInputTypeAttribute } from 'react';

export function TextControl(props: {
  name: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  desc?: string;
  required?: boolean;
  onChange: (v: string) => void
}) {
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
        type={props.type ? props.type : "text"}
        className="form-control"
        id={props.name}
        name={props.name}
        required={props.required}
        onChange={(e) => props.onChange(e.target.value)}
      />

      {
        props.desc &&
        <div className="form-text">{props.desc}</div>
      }
    </div>
  );
}

export function TextAreaControl(props: {
  name: string;
  label?: string;
  value: string;
  disabled?: boolean;
  onChange: (v: string) => void;
}) {
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

export function CheckOrRadio(props: {
  name: string;
  type: 'checkbox' | 'radio';
  label?: string;
  checked?: boolean;
  disabble?: boolean;
  onChange: (v: boolean) => void;
}) {
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
