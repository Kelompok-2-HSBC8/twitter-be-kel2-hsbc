const likeTweetModel = require('../../models/tweets/likeTweetModel');

const likeTweet = async (req, res) => {
  try {
    const { tweetId, id } = req.body;
    const response = await likeTweetModel(tweetId, id);
    if (response) {
      res.status(201).json({ status: 201, message: 'Success like tweet' });
    } else {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = likeTweet;
