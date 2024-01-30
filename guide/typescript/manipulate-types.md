# Type Manipulation

* `Partial<Type>`
* `Required<Type>`
* `Readonly<Type>`
* `Record<Keys, Type>`
* `Pick<Type, Keys>`
* `Omit<Type, Keys>`
* `Exclude<UnionType, ExcludedMember>`
* `Extract<Type, Union>`

## `keyof` Operator

The `keyof` operator takes an object type  and produces a string or numeric literal union of its keys.

```ts
type Point = { x: number; y: number; };
type P = keyof Point;
```

Type P is the same type as `"x | "y"`

If the type has a string or number index signature, keyof will return those types instead.

## `Record<Keys, Type>`

Map the properties of a type to another type.

```ts
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' }
}
```

## Omit

Opposite of `Pick`.

```ts
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;
```
