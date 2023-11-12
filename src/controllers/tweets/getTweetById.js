const { tweetById } = require('../../models/tweets/getTweetById');

const getTweetById = async (req, res, next) => {
  try {
    const paramsid = req.params.id;
    const tweets = await tweetById(paramsid);

    if (!tweets) {
      res.status(404).json({
        status: 404,
        message: `Tweet Not Found`,
      });
    }
    res.status(200).json({
      status: 200,
      data: tweets,
      mesaage: `Success`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTweetById,
};
