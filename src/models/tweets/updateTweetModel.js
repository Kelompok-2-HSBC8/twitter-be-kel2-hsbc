const prisma = require('../../config/db');

const updateTweetModel = async (content, id) => {
  const response = await prisma.tweet.update({
    where: {
      id,
    },
    data: {
      content,
      updatedAt: new Date(),
      isUpdated: true,
    },
  });

  return response;
};

module.exports = updateTweetModel;
