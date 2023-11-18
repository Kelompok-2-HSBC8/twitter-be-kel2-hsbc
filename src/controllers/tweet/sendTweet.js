const sendTweetModel = require('../../models/tweets/sendTweetModel');

const sendTweet = async (req, res) => {
  try {
    const { content, id } = req.body;
    const response = await sendTweetModel(content, id);
    if (response) {
      res
        .status(201)
        .json({ status: 201, message: 'Success create new tweet' });
    } else {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendTweet;
