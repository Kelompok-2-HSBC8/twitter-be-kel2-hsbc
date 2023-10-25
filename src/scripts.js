/* eslint-disable linebreak-style */
// eslint-disable-next-line prettier/prettier
/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-extraneous-dependencies
const { PrismaClient } = require('@prisma/client');
// eslint-disable-next-line import/no-extraneous-dependencies

const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.findMany({
    include: {
      tweet: true,
    },
  });
  console.log(user);
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
