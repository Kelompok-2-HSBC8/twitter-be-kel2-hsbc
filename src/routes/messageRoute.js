const express = require('express');
const getMessage = require('../controllers/message/getMessage');
const sendMessage = require('../controllers/message/sendMessage');
const authMiddleware = require('../middleware/auth');
const sendMessageMiddleware = require('../middleware/massage');

const messageRouter = express.Router();

messageRouter.get('/v1/chat', authMiddleware, getMessage);
messageRouter.post(
  '/v1/chat',
  authMiddleware,
  sendMessageMiddleware,
  sendMessage
);

module.exports = messageRouter;
