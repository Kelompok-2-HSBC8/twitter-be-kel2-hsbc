const prisma = require('../config/db');

exports.user = async () => {
  const response = await prisma.users.findMany();
  return { status: 200, message: 'Success', data: response };
};

exports.userId = async (userid) => {
  const response = await prisma.users.findUnique({
    where: {
      id: userid,
    },
  });
  return { status: 200, message: 'Success', data: response };
};
