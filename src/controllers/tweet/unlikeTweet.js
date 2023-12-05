const unlikeTweetModel = require('../../models/tweets/unlikeTweet');

const unlikeTweet = async (req, res) => {
  try {
    const { tweetId } = req.body;

    if (!tweetId) {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
    const response = await unlikeTweetModel(tweetId);
    if (response) {
      res.status(201).json({ status: 200, message: 'Success unlike tweet' });
    } else {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = unlikeTweet;
