import { PrismaContext } from './PrismaContext';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { APP_SECRET } from '../util';

export async function signup(parent, args, context: PrismaContext, info) {
  console.log('Signup');

  const password = await bcrypt.hash(args.password, 10);

  const user = await context.prisma.user.create({
    data: {
      name: args.name,
      email: args.email,
      password,
    }
  });

  console.log(user);

  const token = jwt.sign({ userId: user.id}, APP_SECRET);

  return {
    token,
    user,
  }
}

export async function login(parent, args, context: PrismaContext, info) {
  const user = await context.prisma.user.findUnique({
    where: {
      email: args.email
    },
  });

  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({userId: user.id}, APP_SECRET);

  return {
    token,
    user,
  }
}

export async function post(parent, args, context: PrismaContext, info) {
  
  const { userId } = context;

  console.log(`Create post for user ${userId}`);

  const newLink = await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy: {
        connect: {
          id: userId
        }
      }
    }
  });

  return newLink;
}
