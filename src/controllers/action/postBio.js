const postBioModel = require('../../models/action/postBioModel');
const parseJwt = require('../../helpers/decodeJWT');

const postBio = async (req, res) => {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    const data = parseJwt(bearerToken);
    const id = data.sub;

    const { bio } = req.body;
    const response = await postBioModel(id, bio);
    if (response) {
      res.status(201).json({ status: 201, message: 'Success add bio' });
    } else {
      res.status(400).json({ status: 400, message: 'Bad Request' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = postBio;
