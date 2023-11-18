const prisma = require('../../config/db');

const sendMessageModel = async (content, id, messageId) => {
  const response = await prisma.chat.create({
    data: {
      content,
      senderId: id,
      messageId,
    },
  });
  return response;
};

module.exports = sendMessageModel;
