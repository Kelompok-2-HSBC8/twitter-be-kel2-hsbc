const getTweetModel = require('../../models/tweets/getTweetModel');
const user = require('../../middleware/auth');
// eslint-disable-next-line consistent-return
const getTweet = async (req, res) => {
  try {
    const response = await getTweetModel();
    if (!response) {
      return res.status(404).json({ status: 404, message: 'Tweet Not Found' });
    } else {
      console.log(user.authUser);
      return res.status(200).json({
        status: 200,
        message: 'Success get tweet data',
        data: response,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getTweet;
