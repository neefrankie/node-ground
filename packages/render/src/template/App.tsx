import React from 'react';
import { Script, ScriptProps } from './Script';
import { BootstrapLink, InlineStyle, RootFullHeight, StyleLink } from './Style';
import { Favicon, AppleTouchIcon } from './Icon';

export function App(
  props: {
    title: string;
    baseHref: string;
    iconBaseUrl: string;
    iconSizes: number[];
    inlineStyle?: string;
    fullheight?: boolean;
    bootstrapVersion?: string;
    styles?: string[];
    headScripts?: ScriptProps[];
    bodyScripts?: ScriptProps[];
    footer?: JSX.Element;
  }
) {
  return (
    <html lang="en">
      <head>
        <base href={`/${props.baseHref}`} />
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
          props.iconSizes.map((size) => (
            <AppleTouchIcon
              baseUrl={props.iconBaseUrl}
              size={size}
            />
          ))
        }
        <Favicon
          baseUrl={props.iconBaseUrl}
        />
        
        {
          props.fullheight && <RootFullHeight />
        }
        {
          props.bootstrapVersion && <BootstrapLink version={props.bootstrapVersion} />
        }
        {
          props.inlineStyle && <InlineStyle value={props.inlineStyle} />
        }
        {
          props.styles &&
          props.styles.map((href) => <StyleLink href={href} />)
        }
        {
          props.headScripts &&
          props.headScripts.map((attr) => (
            <Script src={attr.src} type={attr.type} async={attr.async} />
          ))
        }
        <title>{props.title}</title>
      </head>
      <body>
        <div id="root"></div>

        {props.footer}
        <script type="module" src="/src/main.tsx"></script>
        {
          props.bodyScripts &&
          props.bodyScripts.map((attr) => (
            <Script src={attr.src} type={attr.type} async={attr.async} />
          ))
        }
      </body>
    </html>
  );
}


