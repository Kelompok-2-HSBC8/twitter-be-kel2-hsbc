const followModel = require('../../models/action/followModel');
const parseJwt = require('../../helpers/decodeJWT');

const follow = async (req, res) => {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    const data = parseJwt(bearerToken);
    const id = data.sub;

    const { followId } = req.body;
    const response = await followModel(id, followId);
    if (response) {
      res.status(201).json({ status: 201, message: 'Success follow' });
    } else {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = follow;
