import { graphql, buildSchema } from 'graphql';

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const rootValue = {
  hello: () => 'Hello World!',
};

const source = "{ hello }";

test('first graphql', () => {
  graphql({
    schema,
    source,
    rootValue
  })
  .then(response => {
    console.log(response);
  });
})
