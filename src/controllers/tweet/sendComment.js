const sendCommentModel = require('../../models/tweets/sendcommentTweetModel');
const parseJwt = require('../../helpers/decodeJWT');

const sendComment = async (req, res) => {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    const data = parseJwt(bearerToken);
    const id = data.sub;
    const { tweetId, content } = req.body;
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
