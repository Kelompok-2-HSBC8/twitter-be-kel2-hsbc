const PrismaClient = require('@prisma/client');

const prisma = new PrismaClient.PrismaClient();
const deleteTweet = async (req, res) => {
  try {
    await prisma.tweet.delete({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json({ status: 200, message: 'Success delete tweet' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteTweet;
