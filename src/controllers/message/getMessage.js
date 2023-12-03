const getMessageModel = require('../../models/message/getMessageModel');
const parseJwt = require('../../helpers/decodeJWT');

const getMessage = async (req, res) => {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    const data = parseJwt(bearerToken);
    const id = data.sub;
    const response = await getMessageModel(id);
    if (response) {
      res.status(200).json({
        status: 200,
        message: 'Success get message data',
        data: response,
      });
    } else {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getMessage;
