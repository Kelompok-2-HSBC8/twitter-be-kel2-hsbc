const sendMessageModel = require('../../models/message/sendMessageModel');

const sendMessage = async (req, res) => {
  try {
    const { content, id, messageId } = req.body;
    const response = await sendMessageModel(content, id, messageId);
    if (response) {
      res.status(201).json({ status: 201, message: 'Success', data: response });
    } else {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMessage;
