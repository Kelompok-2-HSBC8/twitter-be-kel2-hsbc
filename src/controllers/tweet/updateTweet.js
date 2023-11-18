const PrismaClient = require('@prisma/client');

const prisma = new PrismaClient.PrismaClient();
const updateTweet = async (req, res) => {
  try {
    await prisma.tweet.update({
      where: {
        id: req.body.id,
      },
      data: {
        content: req.body.content,
        updatedAt: new Date(),
        isUpdated: true,
      },
    });
    res.status(200).json({ status: 200, message: 'Success update data tweet' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateTweet;
