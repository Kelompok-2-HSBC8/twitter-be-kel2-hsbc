const prisma = require('../../config/db');

const getTrends = async () => {
  const trends = await prisma.trend.findMany();

  return trends;
};

module.exports = {
  getTrends,
};
