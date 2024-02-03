import React from 'react';

function StyleLink(props: { href: string }) {
  return <link href={props.href} rel="stylesheet" />;
}

export function bootstrapLink(version: string) {
  return `https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/${version}/css/bootstrap.min.css`;
}

function InlineStyle(
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

function StyleFullHeight() {
  const style = `#root { min-height: 100vh;}`;
  
  return <InlineStyle value={style} />
}

export function Styles(
  props: {
    fullHeight?: boolean;
    links?: string[];
    inline?: string;
  }
) {
  return (
    <>
      { props.fullHeight && <StyleFullHeight /> }
      { props.inline && <InlineStyle value={props.inline} /> }
      {
        props.links && props.links.map((link, i) => 
          <StyleLink href={link} key={i} />
        )
      }
    </>
  );
}
