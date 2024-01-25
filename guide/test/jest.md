# Jest

## Getting Started

Install:

```sh
pnpm add -D jest
pnpm create jest@latest
```

In `package.json`:

```json
{
    "scripts": {
        "test": "jest"
    }
}
```

### Use Babel

```sh
babel-jest @babel/core @babbel/preset-env
```

Create `babel.config.js`:

```js
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
    ]
}
```

Make Babel config jest-aware:

Jest will set `process.env.NODE_ENV` to `test` if it's not set to something else.

```js
module.exports = api => {
    const isTest = api.env('test');

    return {

    };
}
```

### TypeScript with ts-jest

```sh
pnpm add -D ts-jest @types/jest
```

By default, Jest can run without any config files, but it will not compile `.ts` files. To make it transpile TypeScript with `ts-jest`, creat a configuration file that will tell Jest to use a `ts-jest` preset:

```sh
npx ts-jest config:init
```

### Type definitions

Use either:

* `@jest/globals`. Need to import.
* `@types/jest`. No need to import.

## Configuration

## CLI

```sh
jest my-test --notify --config=config.json
```

Run Jest on files matching `my-test`, using `config.json` as a configuration file and display a native OS notification after the run.

## Basics

### Describe

A describe block is used for organizing test cases in logical groups of tests.

### It or Test

Use the `test` keyword to start a new test case definition.

The `it` keyword is a alias for the `test` keyword.

```js
describe('Beverage()', () => {
    it('should be delicous', () => {
        
    })
})
```

## Using Matchers

## Testing Async Code

### Promises

Return a promise from test, and Jest will wait for that promise to resolve. If the promise is rejected, th test will fail.

```ts
test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter')
    });
});
```

### Async/Await

```ts
test('the data is peanut butter', async() => {

})
```
