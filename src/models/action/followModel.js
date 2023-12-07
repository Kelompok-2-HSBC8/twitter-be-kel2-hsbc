const prisma = require('../../config/db');

const followModel = async (id, followId) => {
  const response = await prisma.following.create({
    data: {
      userId: id,
      followBy: followId,
    },
  });
  return response;
};

module.exports = followModel;
