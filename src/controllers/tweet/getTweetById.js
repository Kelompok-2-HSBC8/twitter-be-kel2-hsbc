const tweetById = require('../../models/tweets/getTweetById');

// eslint-disable-next-line consistent-return
const getTweetById = async (req, res, next) => {
  try {
    const { id } = req.body;
    const tweets = await tweetById(id);

    if (!tweets) {
      return res.status(404).json({
        message: 'Tweet Not Found',
        status: 404,
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Success',
      data: tweets,
    });
  } catch (error) {
    if (error.message === 'Invalid Tweet Id') {
      return res.status(400).json({
        status: 400,
        message: error.message,
      });
    }
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

module.exports = getTweetById;
