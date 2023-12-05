const prisma = require('../../config/db');

const unlikeTweetModel = async (tweetId) => {
  const response = await prisma.likes.delete({
    where: {
      tweetId,
    },
  });
  return response;
};

module.exports = unlikeTweetModel;
