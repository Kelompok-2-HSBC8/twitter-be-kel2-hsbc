const express = require('express');

const router = express.Router();
const tweetRouter = require('./tweetRoute');
const userRouter = require('./userRoute');
const messageRouter = require('./messageRoute');
const trendRouter = require('./trendRoute');

router.use(tweetRouter);
router.use(userRouter);
router.use(messageRouter);
router.use(trendRouter);

module.exports = router;
