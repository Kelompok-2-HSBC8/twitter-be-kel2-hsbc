const express = require('express');
const user = require('../controllers/useraAPI/userController');
const authMiddleware = require('../middleware/auth');

const userRouter = express.Router();

userRouter.get('/v1/user', authMiddleware, user.getUser);
userRouter.get('/v1/user/:id', authMiddleware, user.getUserById);

module.exports = userRouter;
