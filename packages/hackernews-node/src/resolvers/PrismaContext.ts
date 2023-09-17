import { PrismaClient } from '@prisma/client';

export type PrismaContext = {
  prisma: PrismaClient;
  userId: number | null;
};
