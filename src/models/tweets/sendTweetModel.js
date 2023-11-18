const prisma = require('../../config/db');

const sendTweetModel = async (content, id) => {
  const response = await prisma.tweet.create({
    data: {
      content,
      id,
    },
  });

  return response;
};

module.exports = sendTweetModel;
