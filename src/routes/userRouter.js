const express = require('express');
const user = require('../controllers/useraAPI/userController');

const userRouter = express.Router();

userRouter.get('/v1/user', user.getUser);
userRouter.get('/v1/user/:id', user.getUserById);

module.exports = userRouter;
