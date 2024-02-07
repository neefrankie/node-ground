import { ForwardedRef, InputHTMLAttributes, LabelHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames'

export type InputSlotProps = {
  label?: string;
  desc?: string;
  error?: string;
};

export type InputProps = InputSlotProps & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(function (
  props: InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
  },
  ref?: ForwardedRef<HTMLInputElement>,
) {

  const {
    invalid,
    ...attr
  } = props;

  const cls = classNames('form-control', {
    'is-invalid': invalid,
  });

  return (
    <input
      {...attr}
      className={cls}
      id={props.name}
      ref={ref}
    />
  );
});

export function FormLabel(
  props: {
    text?: string;
  } & LabelHTMLAttributes<HTMLLabelElement>
) {
  if (!props.text) {
    return null;;
  }

  const {
    text,
    className,
    ...attr
  } = props;

  const cls = classNames('form-label', className);

  return (
    <label 
      {...attr}
      className={cls}
    >
      {text}
    </label>
  )
}

export function FormText(
  props: {
    children?: string | JSX.Element;
  }
) {
  if (props.children) {
    return null;
  }

  return (
    <small className="form-text text-muted">
      {props.children}
    </small>
  );
}

export function InvalidFeedback(
  props: {
    text?: string;
  }
) {
  if (!props.text) {
    return null;
  }

  return (
    <div className="invalid-feedback">{props.text}</div>
  );
}


