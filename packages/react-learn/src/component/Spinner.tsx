import React from 'react';

export function Spinner(
  props: {
    animation?: 'border' | 'grow';
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    size?: 'sm';
  }
) {

  let anim = props.animation ? props.animation : 'border';
  
  let cls = `spinner-${anim}`;

  if (props.variant) {
    cls += ` text-${props.variant}`;
  }
  
  if (props.size) {
    cls += ` spinner-${anim}-${props.size}`;
  }

  return (
    <span className={cls} role="status"></span>
  );
}
