const PrismaClient = require('@prisma/client');

const prisma = new PrismaClient.PrismaClient();

const sendMessageMiddleware = async (req, res, next) => {
  const message = await prisma.message.findMany({
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
  const getMessage = message.filter((item) => item.id === req.body.messageId);
  if (getMessage.length === 0) {
    res.status(404).json({ status: 404, message: 'Not Found' });
  } else if (
    getMessage[0].sender.id === req.body.id ||
    getMessage[0].receiver.id === req.body.id
  ) {
    next();
  } else {
    res.status(403).json({ status: 403, message: 'Forbidden Access' });
  }
};

module.exports = sendMessageMiddleware;
