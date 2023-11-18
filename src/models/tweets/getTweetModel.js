const prisma = require('../../config/db');

const getTweetModel = async () => {
  const response = await prisma.tweet.findMany({
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

  return response;
};

module.exports = getTweetModel;
