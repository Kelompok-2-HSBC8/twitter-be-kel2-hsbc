const getMessageModel = require('../../models/message/getMessageModel');

const getMessage = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await getMessageModel(id);
    if (response) {
      res.status(200).json({ status: 200, message: 'Success get message data', data: response });
    } else {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getMessage;
