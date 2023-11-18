const sendCommentModel = require('../../models/tweets/sendcommentTweetModel');

const sendComment = async (req, res) => {
  try {
    const { tweetId, id, content } = req.body;
    const response = await sendCommentModel(tweetId, content, id);
    if (response) {
      res.status(201).json({ status: 201, message: 'Success send comment' });
    } else {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendComment;
