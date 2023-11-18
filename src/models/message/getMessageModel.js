const prisma = require('../../config/db');

const getMessageModel = async (id) => {
  const response = await prisma.message.findMany({
    where: {
      OR: [
        {
          receiverId: id,
        },
        {
          senderId: id,
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
  return response;
};

module.exports = getMessageModel;
