import React from 'react';

export function AppleTouchIcon(
  props: { 
    baseUrl: string; 
    size: number;
  }
) {

  const size = `${props.size}x${props.size}`;

  return (
    <link
      rel="apple-touch-icon"
      sizes={size}
      href={`${props.baseUrl}/apple-touch-icon-${size}.png`}
    />
  );
}

export function Favicon(
  props: { 
    baseUrl: string;
    size?: number;
  }
) {
  if (props.size) {
    const size = `${props.size}x${props.size}`;

    return (
      <link
        rel='Icon'
        type='image/png'
        sizes={size}
        href={`${props.baseUrl}/favicon-${size}`}
      />
    );
  }

  return (
    <link
      rel="icon"
      type="image/x-icon"
      href={`${props.baseUrl}/favicon.ico`}
    />
  );
}

export function IconMeta(
  props: {
    baseUrl: string;
  }
) {

  const favSizes = [16, 32, 48];
  const appleSizes = [57, 60, 72, 76, 114, 120, 144, 152, 167, 180, 1024];
  
  return (
    <>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        httpEquiv="X-UA-Compatible"
        content="ie=edge"
      />
      <Favicon
        baseUrl={props.baseUrl}
      />
      {
        favSizes.map((size) => (
          <Favicon
            key={size}
            baseUrl={props.baseUrl}
            size={size}
          />
        ))
      }
      {
        appleSizes.map((size) => 
          <AppleTouchIcon
            key={size}
            baseUrl={props.baseUrl}
            size={size}
          />
        )
      }
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
      <meta name="apple-mobile-web-app-title"/>
    </>
  )
}
