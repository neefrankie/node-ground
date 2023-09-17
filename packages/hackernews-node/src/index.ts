import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { PrismaClient } from '@prisma/client';
import { join } from 'path';
import { getUserId } from './util';
import * as Query from './resolvers/Query';
import * as Mutation from './resolvers/Mutation';
import * as User from './resolvers/User';
import * as Link from './resolvers/Link';

const prisma = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
  User,
  Link
};

const server = new ApolloServer({
  typeDefs: readFileSync(join(__dirname, '../src/schema.graphql'), 'utf8'),
  resolvers,
});

startStandaloneServer(server, {
  context: async ({req, res}) => ({
    ...req,
    prisma,
    userId: req && req.headers.authorization
      ? getUserId(req)
      : null,
  }),
  listen: { port: 4000 },
})
.then(({url}) => {
  console.log(`🚀  Server ready at: ${url}`);
});



