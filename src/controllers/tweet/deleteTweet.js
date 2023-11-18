const deleteTweetModel = require('../../models/tweets/deleteTweetModel');

const deleteTweet = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await deleteTweetModel(id);
    if (response) {
      res.status(200).json({ status: 200, message: 'Success delete tweet' });
    } else {
      res.status(404).json({ status: 404, message: 'Failed delete tweet' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteTweet;
