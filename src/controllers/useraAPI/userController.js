const { user, userId } = require('../../models/user');

exports.getUser = async (req, res) => {
  try {
    const response = await user();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userid = req.params.id;
    const user = await userId(userid);

    if (user) {
      res.status(200).json({ status: 200, message: 'Success', data: user });
    } else {
      res.status(404).json({ status: 404, message: 'not found' });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};
