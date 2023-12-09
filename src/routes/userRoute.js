const express = require('express');
const user = require('../controllers/useraAPI/userController');
const follow = require('../controllers/action/follow');
const postBio = require('../controllers/action/postBio');
const authMiddleware = require('../middleware/auth');

const userRouter = express.Router();

userRouter.get('/v1/user', authMiddleware, user.getUser);
userRouter.get('/v1/user/:id', authMiddleware, user.getUserById);
userRouter.get('/v1/info', authMiddleware, user.getUserInfo);
userRouter.post('/v1/follow', authMiddleware, follow);
userRouter.post('/v1/profile/bio', authMiddleware, postBio);
module.exports = userRouter;
