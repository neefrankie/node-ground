import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      posts: {
        create: {
          title: 'Hello World',
        },
      },
    },
  });

  console.log(user);

  const users = await prisma.user.findMany({
    include: {
      posts: true,
    }
  });

  console.dir(users, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
