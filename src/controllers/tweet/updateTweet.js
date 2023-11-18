const updateTweetModel = require('../../models/tweets/updateTweetModel');

const updateTweet = async (req, res) => {
  try {
    const { id, content } = req.params;
    const response = await updateTweetModel(content, id);
    if (!response) {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    } else {
      res
        .status(200)
        .json({ status: 200, message: 'Success update data tweet' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateTweet;
