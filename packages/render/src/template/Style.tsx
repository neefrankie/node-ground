import React from 'react';

export function StyleLink(props: { href: string }) {
  return <link href={props.href} rel="stylesheet" />;
}

export function BootstrapLink(
  props: {
    version: string
  }
) {
  return (
    <link 
      rel="stylesheet"
      href={`https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/${props.version}/css/bootstrap.min.css`}
    />
  )
}

export function InlineStyle(
  props: {
    value: string;
  }
) {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: props.value
      }}
    />
  );
}

export function RootFullHeight() {
  const style = `#root { min-height: 100vh;}`;
  
  return <InlineStyle value={style} />
}
