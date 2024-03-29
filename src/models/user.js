const prisma = require('../config/db');

exports.user = async () => {
  const response = await prisma.users.findMany({
    select: {
      id: true,
      created_at: true,
      updated_at: true,
      email: true,
      raw_user_meta_data: true,
      phone: true,
      bio: {
        select: {
          bio: true,
        },
      },
      followers: {
        select: {
          followedBy: {
            select: {
              id: true,
              email: true,
              raw_user_meta_data: true,
            },
          },
        },
      },
      following: {
        select: {
          followedBy: {
            select: {
              id: true,
              email: true,
              raw_user_meta_data: true,
            },
          },
        },
      },
      tweet: {
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
      },
    },
  });

  return { status: 200, message: 'Success', data: response };
};

exports.userId = async (userid) => {
  const response = await prisma.users.findUnique({
    where: {
      id: userid,
    },
    select: {
      id: true,
      created_at: true,
      updated_at: true,
      email: true,
      raw_user_meta_data: true,
      phone: true,
      bio: {
        select: {
          bio: true,
        },
      },
      followers: {
        select: {
          followedBy: {
            select: {
              id: true,
              email: true,
              raw_user_meta_data: true,
            },
          },
        },
      },
      following: {
        select: {
          followedBy: {
            select: {
              id: true,
              email: true,
              raw_user_meta_data: true,
            },
          },
        },
      },
      tweet: {
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
      },
    },
  });

  return response;
};

exports.getAuthUser = async (userid) => {
  const response = await prisma.users.findUnique({
    where: {
      id: userid,
    },
    select: {
      id: true,
      created_at: true,
      updated_at: true,
      email: true,
      raw_user_meta_data: true,
      phone: true,
      bio: {
        select: {
          bio: true,
        },
      },
      followers: {
        select: {
          followedBy: {
            select: {
              id: true,
              email: true,
              raw_user_meta_data: true,
            },
          },
        },
      },
      following: {
        select: {
          followedBy: {
            select: {
              id: true,
              email: true,
              raw_user_meta_data: true,
            },
          },
        },
      },
      tweet: {
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
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });

  return { status: 200, message: 'Success', data: response };
};
