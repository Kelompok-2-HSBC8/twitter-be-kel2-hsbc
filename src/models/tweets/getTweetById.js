const prisma = require('../../config/db');

const tweetById = async (id) => {
  const tweets = await prisma.tweet.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      isUpdated: true,
      content: true,
      postedBy: {
        select: {
          id: true,
          email: true,
          raw_user_meta_data: true,
        },
      },
      commentBy: {
        select: {
          id: true,
          createdAt: true,
          content: true,
          user: {
            select: {
              id: true,
              email: true,
              raw_user_meta_data: true,
            },
          },
        },
      },
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
      retweetBy: {
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
      shareBy: {
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
    },
  });

  return tweets;
};

module.exports = tweetById;
