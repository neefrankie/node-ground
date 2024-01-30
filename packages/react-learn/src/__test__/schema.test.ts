import { describe } from 'node:test';
import { ZodError, z } from 'zod';

describe('basic usage', () => {
  test('simple string', () => {
    // Creating a schema for strings
    const mySchema = z.string();

    mySchema.parse('tuna');
    // ZodError
    try {
      mySchema.parse(12);
    } catch(e) {
      // errors: [{
      //  "code": "invalid_type",
      //  "expected": "string",
      //  "received": "number",
      //  "path": [],
      //  "message": "Expected string, received number"
      // }]
      // 
    }
    mySchema.safeParse('tuna');
    mySchema.safeParse(12);
  });

  test('object schema', () => {
    const User = z.object({
      username: z.string(),
    });

    User.parse({ username: 'Ludwig' });

    type User = z.infer<typeof User>;
  });
});

describe('primitives', () => {
  test('primitive values', () => {
    z.string();
    z.number();
    z.bigint();
    z.boolean();
    z.date();
    z.symbol();
  });

  test('empty types', () => {
    z.undefined();
    z.null();
    z.void();
  });

  test('catch-all types', () => {
    z.any();
    z.unknown();
  });

  test('never', () => {
    z.never();
  });
});

describe('objects', () => {
  const Dog = z.object({
    name: z.string(),
    age: z.number(),
  });

  test('shape', () => {
    console.log(Dog.shape.name);
    console.log(Dog.shape.age);
  });

  // The .partial method makes all properties optional
  test('partial', () => {
    const user = z.object({
      email: z.string(),
      username: z.string(),
    });

    const partialUser = user.partial();

    const optionalEmail = user.partial({
      email: true,
    });
  });

  // The .required() method makes all properties required.
  test('required', () => {
    const user = z.object({
      email: z.string(),
      username: z.string(),
    })
    .partial();

    // Createa required version
    const requiredUser = user.required();

    // Specify which properties to make required:
    const requiredEmail = user.required({
      email: true,
    });
  });
});

describe('zod errors', () => {
  test('error handling', () => {
    const result = z.object({
      name: z.string(),
    })
    .safeParse({ name: 12 });

    if (!result.success) {
      console.log(result.error.issues);
    }
  });
});
