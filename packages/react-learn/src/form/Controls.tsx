import React, { HTMLInputTypeAttribute } from 'react';

export function TextControl(props: {
  name: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
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
        onChange={(e) => props.onChange(e.target.value)}
      />
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
        rows={3}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        disabled={props.disabled}
      />
    </div>
  );
}
