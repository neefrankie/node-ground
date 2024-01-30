# Data Types

## Index Signatures

Sometimes you don't know all the names of a type's properties ahead of time, but you do know the shape of the values.

In those cases you can use an index signature to describe the types of possible values:

```ts
interface StringArray {
    [index: number]: string;
}
```

An index signature property type must be either string or number.
