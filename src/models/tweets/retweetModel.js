const prisma = require('../../config/db');

const retweetModel = async (tweetId, id) => {
  const response = await prisma.retweet.create({
    data: {
      tweetId,
      userId: id,
    },
  });
  return response;
};

module.exports = retweetModel;
