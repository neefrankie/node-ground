import { PrismaContext } from './PrismaContext';

export function info() {
  return 'This is the API of a Hackernews Clone';
}

export async function feed (parent, args, context: PrismaContext) {
  return context.prisma.link.findMany()
}
