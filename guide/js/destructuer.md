# Desctructuring Assignment

## Binding and assignment

For both object and array destucturing, there are two kinds of desctucturing patterns:

* binding pattern
* assignment pattern

In binding patterns, the pattern starts witha declaration keyword. Then each individual property must either be bound to a variable or futher destructured.

```js
const obj = {
    a: 1,
    b: {
        c: 2
    }
};

const {
    a,
    b: { c: d}
} = obj;

// a to 1, c to 2.
```
