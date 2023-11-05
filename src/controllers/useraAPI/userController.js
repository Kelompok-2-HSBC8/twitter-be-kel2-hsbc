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
      res.status(200).json(user);
    } else {
      res.status(404).json({ msg: 'usernya ga ada' });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
