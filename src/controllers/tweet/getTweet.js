const PrismaClient = require('@prisma/client');

const prisma = new PrismaClient.PrismaClient();

const getTweet = async (req, res) => {
  try {
    const response = await prisma.tweet.findMany({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isUpdated: true,
        content: true,
        postedBy: {
          select: {
            id: true,
            email: true,
            raw_user_meta_data: true,
          },
        },
        commentBy: true,
        likesBy: true,
        retweetBy: true,
        shareBy: true,
      },
    });
    res.status(200).json({ status: 200, message: 'Success get tweet data', data: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getTweet;
