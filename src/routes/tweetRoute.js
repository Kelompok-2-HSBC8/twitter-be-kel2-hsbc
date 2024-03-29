const express = require('express');
const getTweet = require('../controllers/tweet/getTweet');
const authMiddleware = require('../middleware/auth');
const sendTweet = require('../controllers/tweet/sendTweet');
const updateTweet = require('../controllers/tweet/updateTweet');
const deleteTweet = require('../controllers/tweet/deleteTweet');
const getTweetById = require('../controllers/tweet/getTweetById');
const likeTweet = require('../controllers/tweet/likeTweet');
const unlikeTweet = require('../controllers/tweet/unlikeTweet');
const sendComment = require('../controllers/tweet/sendComment');
const retweet = require('../controllers/tweet/retweetTweet');

const tweetRouter = express.Router();

tweetRouter.get('/v1/tweet', authMiddleware, getTweet);
tweetRouter.post('/v1/tweet', authMiddleware, sendTweet);
tweetRouter.put('/v1/tweet', authMiddleware, updateTweet);
tweetRouter.delete('/v1/tweet', authMiddleware, deleteTweet);
tweetRouter.get('/v1/tweet/:id', authMiddleware, getTweetById);
tweetRouter.post('/v1/tweet/like', authMiddleware, likeTweet);
tweetRouter.delete('/v1/tweet/like', authMiddleware, unlikeTweet);
tweetRouter.post('/v1/tweet/comment', authMiddleware, sendComment);
tweetRouter.post('/v1/tweet/retweet', authMiddleware, retweet);

module.exports = tweetRouter;
