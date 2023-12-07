const retweetModel = require('../../models/tweets/retweetModel');
const parseJwt = require('../../helpers/decodeJWT');

const retweet = async (req, res) => {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    const data = parseJwt(bearerToken);
    const id = data.sub;

    const { tweetId } = req.body;
    const response = await retweetModel(tweetId, id);
    if (response) {
      res.status(201).json({ status: 201, message: 'Success retweet' });
    } else {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = retweet;
