# Mapped Types

Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time.

A mapped type is a generic type which uses a union of PropertyKey to iterate through keys to create a type:

```ts
type OptionalsFlags<Type> = {
    [Property in keyof Type]: boolean;
}
```

OptionsFlags will take all the properties from the type `Type` and change their values to be a boolean.
