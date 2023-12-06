const prisma = require('../../config/db');

const unlikeTweetModel = async (id) => {
  const response = await prisma.likes.delete({
    where: {
      id,
    },
  });
  return response;
};

module.exports = unlikeTweetModel;
