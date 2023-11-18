const express = require('express');
const user = require('../controllers/useraAPI/userController');
const getMessage = require('../controllers/message/getMessage');
const sendMessage = require('../controllers/message/sendMessage');
const getTweet = require('../controllers/tweet/getTweet');
const authMiddleware = require('../middleware/auth');
const sendTweet = require('../controllers/tweet/sendTweet');
const updateTweet = require('../controllers/tweet/updateTweet');
const deleteTweet = require('../controllers/tweet/deleteTweet');
const getTweetById = require('../controllers/tweet/getTweetById');
const trendsRoute = require('../controllers/trends/getTrends');
const sendMessageMiddleware = require('../middleware/massage');

const router = express.Router();

router.get('/v1/chat', authMiddleware, getMessage);
router.post('/v1/chat', authMiddleware, sendMessageMiddleware, sendMessage);
router.get('/v1/user', authMiddleware, user.getUser);
router.get('/v1/user/:id', authMiddleware, user.getUserById);
router.get('/v1/tweet', authMiddleware, getTweet);
router.post('/v1/tweet', authMiddleware, sendTweet);
router.put('/v1/tweet', authMiddleware, updateTweet);
router.delete('/v1/tweet', authMiddleware, deleteTweet);
router.get('/v1/trend', authMiddleware, trendsRoute);
router.get('/v1/tweet', authMiddleware, getTweetById);

module.exports = router;
