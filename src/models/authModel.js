const PrismaClient = require('@prisma/client');

const prisma = new PrismaClient.PrismaClient();

const token = async (req, res) => {
  try {
    const response = await prisma.users.findMany({
      select: {
        confirmation_token: true,
      },
    });
    res.status(200).json({ status: 200, message: 'Success', data: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = token;
