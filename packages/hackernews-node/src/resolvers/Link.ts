import { PrismaContext } from './PrismaContext';

export function postedBy(parent, args, context: PrismaContext) {
  return context.prisma.link.findUnique({
    where: {
      id: parent.id
    }
  });
}
