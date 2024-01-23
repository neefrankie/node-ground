Jest provides browser globls such as `window` by jsdom.

## Filename conventions

Looks for test files with any of the naming conventions:

	• Files with `.js` suffix in `__tests__` folders
	• Files with `.test.js` suffix
	• Files with `.spec.js` suffix

The `.test.js` / `.spec.js` files or the `__tests__` folders can be located at any depth under the `src` top level folder.

Recommend to put the test files next to the code they are testing so that relative imports appear shorter.

## Command Line Interface

When you run `npm test`, jest will launch in watch mode. Every time you save a file, it will re-run the tests.

The watcher includes an interactive command-line interface with the ability run all tests, or focus on a search pattern. You can keep it open and enjoy fast re-runs.

Disable this behavior by passing in the `--watchAll=false` flag.

## Writing Tests

Add `it()` or `test()` blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

 Jest provides a built-in `expect()` global functions for making assertions.

```
it('sum numbers', () => {
	expect(sum(1, 2)).toEqual(3);
	epxect(sum(2, 2)).toEqual(4);
});
```

See https://jestjs.io/docs/expect

## Testing Components

Start with creating basic smoke tests for your components:

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('reader without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});
```

## React Testing Library

```
yarn --save-dev @testing-library/react @tsting-library/jest-dom
```

To avoid boilerplate in test files, create a `src/setupTests.js`:

```
import '@testing-library/jest-dom';
```

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
	render(<App />);
	expect(screen.getByText('Learn React')).tobeInTheDocument();
});
```
