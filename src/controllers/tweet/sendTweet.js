const sendTweetModel = require('../../models/tweets/sendTweetModel');
const parseJwt = require('../../helpers/decodeJWT');

const sendTweet = async (req, res) => {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    const data = parseJwt(bearerToken);
    const id = data.sub;
    const { content } = req.body;
    if (!content) {
      return res
        .status(400)
        .json({ status: 400, message: 'Bad Request, Please provide content' });
    }

    if (!id) {
      return res
        .status(400)
        .json({
          status: 400,
          message: 'Bad Request, Please provide userId as id',
        });
    }
    const response = await sendTweetModel(content, id);
    if (!response) {
      return res.status(400).json({ status: 400, message: 'Bad Request' });
    }
    return res
      .status(201)
      .json({ status: 201, message: 'Success create new tweet' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendTweet;
