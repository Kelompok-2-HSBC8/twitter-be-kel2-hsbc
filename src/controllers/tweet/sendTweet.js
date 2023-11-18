const PrismaClient = require('@prisma/client');

const prisma = new PrismaClient.PrismaClient();
const sendTweet = async (req, res) => {
  try {
    await prisma.tweet.create({
      data: {
        content: req.body.content,
        userId: req.body.id,
      },
    });
    res.status(201).json({ status: 201, message: 'Success create new tweet' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendTweet;
