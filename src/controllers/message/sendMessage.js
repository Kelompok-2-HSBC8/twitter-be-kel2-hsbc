const sendMessageModel = require('../../models/message/sendMessageModel');
const parseJwt = require('../../helpers/decodeJWT');

const sendMessage = async (req, res) => {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    const data = parseJwt(bearerToken);
    const id = data.sub;
    const { content, messageId } = req.body;
    const response = await sendMessageModel(content, id, messageId);
    if (response) {
      res.status(201).json({ status: 201, message: 'Success send message' });
    } else {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMessage;
