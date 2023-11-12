const prisma = require('../../config/db');

const tweetById = async (paramsid) => {
  const tweets = await prisma.tweet.findUnique({
    where: {
      id: paramsid,
    },
  });

  return tweets;
};

module.exports = {
  tweetById,
};
