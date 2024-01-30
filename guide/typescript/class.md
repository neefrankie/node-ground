# TypeScript Class

## Readonly

Saturday, April 25, 2020
11:22 PM

Make properties readonly by using the `readonly` keyword. Readonly properties must be initialized at their delcaration or in the constructor.

```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 0;

    constructor(theName: string) {
        this.name = theName;
    }
}
```

## Parameter Properties

Parameter properties let you create and initialize a member in one place.

```ts
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {}
}
```

Parameter properties are declared by prefixing a constructor parameter with an accessibility modifier or `readonly`, or both.

## Member Visibility

* `public` Default. Can be accessed anywhere.
* `protected` Only visible to subclasses.
* `private` No access every to members of subclasses.

## Static

```ts
class MyClass {
    static x = 0;
    static printX() {
        console.log(MyClass.x)
    }
}
```

Static members can also use the same public, protected and private visibility modifiers:

```ts
class MyClass {
    private static x = 0;
}
```

Property x is only accessible within class MyClass.

Static members are also inherited.

name, length, and call aren't valid to define as static members.

### static blocks in classes

Static blocks allow you to write a sequence of statements with their own scope that can access private fields within the containing class.

## Abstract Class

They may not be instantiated directly. An abstract class may contain implementation details for its members.

The `abstract` keyword is used to define abstract classes as well as abstract methods within an abstract class.

```ts
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("roaming the earth...");
    }
}
```

Methods within an abstract class that are marked as abstract do no contain an implementation and must be implemented in derived class.
