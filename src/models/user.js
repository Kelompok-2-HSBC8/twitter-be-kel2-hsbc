const prisma = require('../config/db');

exports.user = async () => {
  const response = await prisma.users.findMany();
  return response;
};

exports.userId = async (userid) => {
  const response = await prisma.users.findUnique({
    where: {
      id: userid,
    },
  });
  return response;
};
