const express = require('express');
const Controller = require('../controllers/controller');
const getMessage = require('../controllers/message/getMessage');
const sendMessage = require('../controllers/message/sendMessage');
const getTweet = require('../controllers/tweet');

const router = express.Router();

router.get('/chat', getMessage);
router.post('/chat', sendMessage);
router.get('/tweet', getTweet);

module.exports = router;
