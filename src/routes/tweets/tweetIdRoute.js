const express = require('express');
const { getTweetById } = require('../../controllers/tweets/getTweetById');

const tweetIdRouter = express.Router();

tweetIdRouter.get('/v1/tweets/:id', getTweetById);

module.exports = tweetIdRouter;
