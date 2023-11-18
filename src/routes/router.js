const express = require('express');
const user = require('../controllers/useraAPI/userController');
const getMessage = require('../controllers/message/getMessage');
const sendMessage = require('../controllers/message/sendMessage');
const getTweet = require('../controllers/tweet/getTweet');
const authMiddleware = require('../middleware/auth');
const sendTweet = require('../controllers/tweet/sendTweet');
const updateTweet = require('../controllers/tweet/updateTweet');
const deleteTweet = require('../controllers/tweet/deleteTweet');

const router = express.Router();

router.get('/v1/chat', authMiddleware, getMessage);
router.post('/v1/chat', sendMessage);
router.get('/v1/user', user.getUser);
router.get('/v1/user/:id', user.getUserById);
router.get('/v1/tweet', getTweet);
router.post('/v1/tweet', sendTweet);
router.put('/v1/tweet', updateTweet);
router.delete('/v1/tweet', deleteTweet);

module.exports = router;
