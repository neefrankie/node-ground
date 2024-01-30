# Function

## Function Type Expressions

The syntax `(a: string) => void` means a function with one parameter named a, of type string, that doesn't have a return value.

Use a type alias to name a function type:

```ts
type GreetFunction = (a: string) => void;
```

## Type Annotations

### Parameter Type

When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts.

```ts
function greet(name: string) {
}
```

### Return Type

```ts
function getFavoriteNumber(): number {
    return 26;
}
```

## Optional Parameters

Mark the parameter as optional with `?`

```ts
function f(x?: number) {

}

f()
f(10)
```

Although the parameter is specified as type `number`, the `x` parameter will actually have the type `number | undefined` because the unspecified parameters in JS get the value `undefined`.

You can also provide a parameter default:

```ts
function f(x = 10) {

}
```

Now in the body of `f`, `x` will have type `number` because any `undefined` argument will be replaced with `10`.

Note that when a parameter is optional, callers can always pass `undefined`.
