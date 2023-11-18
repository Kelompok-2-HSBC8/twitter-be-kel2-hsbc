const supabase = require('../services/supabase');

const authMiddleware = async (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    const { data: user, error } = await supabase.auth.getUser(bearerToken);
    if (error) {
      res.status(403).json({ status: 403, message: 'Unauthorized access' });
    } else {
      req.user = user;
      next();
    }
  } else {
    res.status(403).json({ status: 403, message: 'Unauthorized access' });
  }
};

module.exports = authMiddleware;
