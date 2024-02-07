import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { Spinner } from './Spinner';

export type BtnVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark';
export type BtnSize = 'lg' | 'sm';

export function Button(
  props: {
    variant?: BtnVariant;
    size?: BtnSize;
    children: string | JSX.Element | JSX.Element[];
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  
  const {
    variant = 'primary',
    children,
    size,
    className,
    ...attr
  } = props;

  const cls = classNames('btn', `btn-${variant}`, className, {
    [`btn-${size}`]: size,
  });

  return (
    <button
      {...attr}
      className={cls}
    >
      {children}
    </button>
  );
}

export function SpinButton(
  props: {
    text: string;
    progress?: boolean;
    btnSize?: BtnSize;
    variant?: BtnVariant; 
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {

  const {
    text,
    progress,
    btnSize,
    ...attr
  } = props;
  return (
    <Button
      {...attr}
      size={btnSize}
    >
      {
        progress ?
        <Spinner size='sm'/> :
        text
      }
    </Button>
  );
}
