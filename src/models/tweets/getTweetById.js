const prisma = require('../../config/db');

const tweetById = async (id) => {
  if (!(id.length === 36)) {
    throw new Error('Invalid Tweet Id');
  }
  const tweets = await prisma.tweet.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      createdAt: true,
      content: true,
      postedBy: {
        select: {
          id: true,
          email: true,
          raw_user_meta_data: true,
        },
      },
      commentBy: true,
      likesBy: {
        select: {
          id: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              email: true,
              raw_user_meta_data: true,
            },
          },
        },
      },
      retweetBy: true,
      shareBy: true,
    },
  });

  return tweets;
};

module.exports = tweetById;
