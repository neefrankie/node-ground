# Enums

## Numeric Enums

```ts
enum Direction {
 Up = 1,
 Down,
 Left,
 Right
}
```

`Up` is initialized with `1`. All of the following members are auto-incremented from that point on.

You could leave off the initializers entirely. `Up` would have the value `0`, `Down` would have `1`.

Auto-incrementing behavior is useful for cases where we might not care about the member values themselves, but do care that each value is distinct from other values in the same enum.

## String Enums

Each member has to be constant-initialized with a string literal, or with another string enum member.

```ts
enum Direction {
 Up = "UP",
 Down = "Down",
 Left = "LEFT",
 Right = "right"
}
```

While string enums don't have auto-incrementing behavior, string enums have the benefit that they serialize well.

## Computed and constant members

Each enum member has a value associated with it which can be either constant of computed.

An enum member is considered constant if:

* It is the first member in the enum and it has no initializer, in which case it's assigned the value `0`.
* It does not have an initializer and the preceding enum member was a numeric constant. In this case the value of the current enum member will be the value of the preceding enum member plus one.
* The enum member is initialized with a constant enum expression.

In all other cases enum member is considred computed.

## Enums at runtime

Enuma are real objects that exist at runtime.

```ts
enum E {
 X,
 Y,
 Z
}
```

can actually be passed around to functions:

```ts
function f(obj: {X: number}) {
 return objec.X;
}
```

## Enums at compile time

Thursday, May 7, 2020
2:18 PM

Use `keyof typeof` to get a Type that represents all Enum keys as strings.

```ts
enum LogLevel {
 ERROR,
 WARN,
 INFO,
 DEBUG
}

type LogLevelStrings = keyof typeof LogLevel;
```

## Reverse mappings

Numeric enums members also get a reverse mapping from enum values to enum names.

```ts
enum Enum {
 A
}

let a = Enum.A;
let nameOfA = Enum[A]
```

String enum members do not get a reverse mapping generated at all.

## const enums

To avoid paying the cost of extra generated code and additional indirection when accessing enum values, use `const` enums.

```ts
const enum Enum {
 A = 1,
 B = A * 2
}
```

Const enums can only use constant enum expressions and unlike regular enums they are completely removed during compilation.
