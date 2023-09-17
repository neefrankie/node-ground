import { PrismaContext } from './PrismaContext';

export function links(parent, args, context: PrismaContext) {
  return context.prisma.user.findUnique({
    where: {
      id: parent.id
    }
  });
}
