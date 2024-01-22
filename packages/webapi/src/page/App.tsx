import React from 'react';

/**
 * App is used for server side rendering.
 * @param props 
 * @returns 
 */
export function App(
  props: {
    title: string;
    scripts: string[];
    children: JSX.Element;
  }
) {

  const baseUrl = 'https://www.ftacademy.cn/images/favicons';
  const iconSizes = ['180x180', '152x152', '120x120', '76x76'];

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          httpEquiv="X-UA-Compatible"
          content="ie=edge"
        />
        {
          iconSizes.map((size, i) => (
            <TouchIcon
              key={i}
              baseUrl={baseUrl}
              size={size}
            />
          ))
        }
        <Favicon
          baseUrl={baseUrl}
        />
        <link
          href={`https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.3/css/bootstrap.min.css`}
          rel="stylesheet"
        />
        <title>{props.title}</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `#root { min-height: 100vh;}`
          }}
        />


      </head>
      <body>
        <div id="root">{props.children}</div>

        {
          props.scripts.map((src) => <script type='module' src={src}></script>)
        }
      </body>
    </html>
  )
}

function TouchIcon(
  props: {
    baseUrl: string;
    size: string
  }
) {
  return (
    <link
      rel="apple-touch-icon"
      sizes="{{size}}"
      href={`${props.baseUrl}/apple-touch-icon-${props.size}.png`}
    ></link>
  );
}

function Favicon(
  props: {
    baseUrl: string;
  }
) {
  return (
    <link
      href={`${props.baseUrl}/favicon.ico`}
      type="image/x-icon"
      rel="shortcut icon"
    />
  );
}
