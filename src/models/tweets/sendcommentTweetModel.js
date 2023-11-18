const prisma = require('../../config/db');

const sendCommentModel = async (tweetId, content, id) => {
  const response = await prisma.comment.create({
    data: {
      tweetId,
      content,
      userId: id,
    },
  });
  return response;
};

module.exports = sendCommentModel;
