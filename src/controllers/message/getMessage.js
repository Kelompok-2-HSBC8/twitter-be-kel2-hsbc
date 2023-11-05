const PrismaClient = require('@prisma/client');

const prisma = new PrismaClient.PrismaClient();

const getMessage = async (req, res) => {
  try {
    const response = await prisma.message.findMany({
      where: {
        OR: [
          {
            receiverId: req.body.id,
          },
          {
            senderId: req.body.id,
          },
        ],
      },
      select: {
        id: true,
        createdAt: true,
        sender: {
          select: {
            id: true,
            email: true,
            raw_user_meta_data: true,
          },
        },
        receiver: {
          select: {
            id: true,
            email: true,
            raw_user_meta_data: true,
          },
        },
        chat: {
          select: {
            id: true,
            createdAt: true,
            content: true,
            sender: {
              select: {
                id: true,
                email: true,
                raw_user_meta_data: true,
              },
            },
          },
        },
      },
    });
    res.status(200).json({ status: 200, message: 'Success', data: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getMessage;
