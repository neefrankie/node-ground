import { genSalt, hash, compare } from 'bcrypt';

const saltRounds = 10;
const password = "Admin@123";

test("bcrypt", async () => {
  const salt = await genSalt(saltRounds);
  console.log('Salt: ', salt);

  const h = await hash(password, salt);

  console.log('Hash: ', h);
});

test('auto generate a salt and hash', async() => {
  const h = await hash(password, saltRounds);
  console.log('Hash: ', h);
});

test('bycrypt compare', async() => {
  const h = await hash(password, saltRounds);
  console.log('Hash: ', h);

  const matched = await compare(password, h);

  expect(matched).toBe(true);
});
