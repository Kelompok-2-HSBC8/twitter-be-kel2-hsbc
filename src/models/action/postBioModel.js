const prisma = require('../../config/db');

const postBioModel = async (id, bio) => {
  const response = await prisma.description.create({
    data: {
      userId: id,
      bio,
    },
  });
  return response;
};

module.exports = postBioModel;
