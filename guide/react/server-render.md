# React Server-Side Render

Import from `react-dom/server`.

* `renderToPipeableStream`
* `renderToStaticMarkup` Renders a non-interactive React tree to an HTML string.
* `renderToString`

## `renderToPipeableStream`

```ts
import { renderToPipeableStream } from 'react-dom/server';

app.use('/', (request, response) => {
  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['/main.js'],
    onShellReady() {
      response.setHeader('content-type', 'text/html');
      pipe(response);
    }
  });
});
```

Along with the root component, you need to provide a list of bootstrap `<script>` paths. Your root component should return the entire document including the root `<html>` tag.


```tsx
export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles.css"></link>
        <title>My app</title>
      </head>
      <body>
        <Router />
      </body>
    </html>
  );
}
```

React will inject the doctype and your bootstrap `<script>` tags into the resulting HTML stream:

```html
<!DOCTYPE html>
<html>
  <!-- ... HTML from your components ... -->
</html>
<script src="/main.js" async=""></script>
```

On the client, your bootstrap script should hydrate the entire `document` with a call to `hydrateRoot`:

```ts
import { hydrateRoot } from 'react-dom/client';
import App from './App.js';

hydrateRoot(document, <App />);
```

## `renderToStaticMarkup`

```ts
import { renderToStaticMarkup } from 'react-dom/server';

const html = renderToStaticMarkup(<Page />, { identifierPrefix: ''});
```
