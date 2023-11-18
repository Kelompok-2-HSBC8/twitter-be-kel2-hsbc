const prisma = require('../../config/db');

const deleteTweetModel = async (id) => {
  const response = await prisma.tweet.delete({
    where: {
      id,
    },
  });

  return response;
};

module.exports = deleteTweetModel;
