const { user, userId, getAuthUser } = require('../../models/user');
const parseJwt = require('../../helpers/decodeJWT');

exports.getUser = async (req, res) => {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    const data = parseJwt(bearerToken);
    const id = data.sub;
    const response = await user(id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userid = req.params.id;
    const getUser = await userId(userid);

    if (getUser) {
      res.status(200).json({ status: 200, message: 'Success', data: getUser });
    } else {
      res.status(404).json({ status: 404, message: 'not found' });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

exports.getUserInfo = async (req, res) => {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    const data = parseJwt(bearerToken);
    const userid = data.sub;
    const response = await getAuthUser(userid);
    res.status(200).json({ status: 200, message: 'Success', data: response });
  } catch (error) {
    console.log(error.message);
  }
};
