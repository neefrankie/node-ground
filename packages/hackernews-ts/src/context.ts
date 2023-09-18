import { PrismaClient } from '@prisma/client';
import { decodeAuthHeader } from './utils/auth';
import { Request } from 'express';

export const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  userId?: number;
}

export const context = ({ req }: { req: Request }): Context => {
  console.log('Auth header: ', req.headers);

  const token = req && req.headers.authorization
    ? decodeAuthHeader(req.headers.authorization)
    : null;

  console.log('Token: ', token);

  return {
    prisma,
    userId: token?.userId,
  }
};
