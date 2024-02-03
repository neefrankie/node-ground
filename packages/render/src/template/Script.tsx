import React from 'react';

export type ScriptProps = {
  src: string;
  type?: string;
  async?: boolean;
};

function Script(
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

export function Scripts(
  props: {
    scripts?: ScriptProps[];
  }
) {
  return (
    <>
      {
        props.scripts &&
        props.scripts.map((attr, i) => (
          <Script src={attr.src} type={attr.type} async={attr.async} key={i} />
        ))
      }
    </>
  );
}

