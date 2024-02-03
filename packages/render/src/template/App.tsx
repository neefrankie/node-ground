import React from 'react';
import { ScriptProps, Scripts } from './Script';
import { Styles } from './Style';
import { IconMeta } from './Icon';

export function App(
  props: {
    title: string;
    baseHref: string;
    iconBaseUrl: string;
    inlineStyle?: string;
    fullheight?: boolean;
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
        <IconMeta
          baseUrl={props.iconBaseUrl}
        />
        <Styles
          fullHeight={props.fullheight}
          links={props.styles}
          inline={props.inlineStyle}
        />
        <Scripts scripts={props.headScripts} />

        <title>{props.title}</title>
      </head>
      <body>
        <div id="root"></div>

        {props.footer}
        <Scripts scripts={props.bodyScripts} />
      </body>
    </html>
  );
}


