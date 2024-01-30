# React Hook Form

```ts
register(
    name: string,
    options?: RegisterOptions
)
```

Returns:

* `onChange: ChangeHandler`
* `onBlur: ChangeHandler`
* `name: string`

```ts
const {
    onChange, onBlur, name, ref
} = register('firstName');
```
