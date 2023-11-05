const PrismaClient = require('@prisma/client');

const prisma = new PrismaClient.PrismaClient();
const sendMessage = async (req, res) => {
  try {
    const response = await prisma.chat.create({
      data: {
        content: req.body.content,
        senderId: req.body.id,
        messageId: req.body.messageId,
      },
    });
    res.status(201).json({ status: 201, message: 'Success', data: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMessage;
