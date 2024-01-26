import React from 'react';

export type ScriptProps = {
  src: string;
  type?: string;
  async?: boolean;
};

export function Script(
  props: ScriptProps,
) {
  return (
    <script
      type={props.type}
      async={props.async}
      src={props.src}
    ></script>
  )
}
