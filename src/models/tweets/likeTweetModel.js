const prisma = require('../../config/db');

const likeTweetModel = async (tweetId, id) => {
  const response = await prisma.likes.create({
    data: {
      tweetId,
      userId: id,
    },
  });
  return response;
};

module.exports = likeTweetModel;
