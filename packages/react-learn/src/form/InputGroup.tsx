import classNames from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { InputSlot } from './InputSlot';
import { Input, InputProps } from './Input';
import { BtnSize } from '../component/Button';

export function InputGroupSlot(
  props: {
    children: JSX.Element;
    start?: JSX.Element | JSX.Element[];
    end?: JSX.Element | JSX.Element[];
    size?: BtnSize;
  }
) {

  const cls = classNames('input-group', {
    [`input-group-${props.size}`]: props.size,
  });

  return (
    <div className={cls}>
      {props.start}
      {props.children}
      {props.end}
    </div>
  );
}

export const InputGroup = forwardRef( function (
  props: InputProps & {
    startAddOn?: JSX.Element | JSX.Element[];
    endAddOn?: JSX.Element | JSX.Element[];
    addOnSize?: BtnSize;
  },
  ref?: ForwardedRef<HTMLInputElement>
) {

  const {
    label,
    desc,
    error,
    startAddOn,
    endAddOn,
    addOnSize,
    ...attr
  } = props;

  return (
    <InputSlot
      htmlFor={attr.name}
      label={label}
      desc={desc}
      error={error}
    >
      <InputGroupSlot
        start={startAddOn}
        end={endAddOn}
        size={addOnSize}
      >
        <Input
          {...attr}
          id={attr.name}
          ref={ref}
        />
      </InputGroupSlot>
    </InputSlot>
  );
})

export function InputGroupText(
  props: {
    text: string
  }
) {
  return (
    <span className='input-group-text'>{props.text}</span>
  )
}
