import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type SpinnerAnim = 'border' | 'grow';
export type SpinnerVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export function Spinner(
  props: {
    animation?: SpinnerAnim;
    variant?: SpinnerVariant;
    size?: 'sm';
  } & HTMLAttributes<HTMLSpanElement>
) {

  const anim = props.animation ? props.animation : 'border';

  const cls = classNames(`spinner-${anim}`, props.className, {
    [`text-${props.variant}`]: props.variant,
    [`spinner-${anim}-${props.size}`]: props.size,
  });

  return (
    <span className={cls} role="status"></span>
  );
}
