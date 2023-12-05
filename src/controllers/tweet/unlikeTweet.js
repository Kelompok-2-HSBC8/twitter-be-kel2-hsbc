const unlikeTweetModel = require('../../models/tweets/unlikeTweet');
const parseJwt = require('../../helpers/decodeJWT');

const unlikeTweet = async (req, res) => {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    const data = parseJwt(bearerToken);
    const userId = data.sub;

    const { id } = req.body;
    if (!id) {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
    const response = await unlikeTweetModel(id);
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
