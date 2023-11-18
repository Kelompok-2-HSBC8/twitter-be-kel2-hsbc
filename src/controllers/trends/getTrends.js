const { getTrends } = require('../../models/trends/trends');

const trend = async (req, res) => {
  try {
    const trends = await getTrends();

    res.status(200).json({
      status: 200,
      data: trends,
      mesaage: 'Success',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      mesaage: error.mesaage,
    });
  }
};

module.exports = trend;
