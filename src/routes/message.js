const getMessage = require('../controllers/message/getMessage');
const sendMessage = require('../controllers/message/sendMessage');

const getRouteMessage = {
  path: '/chat',
  controller: getMessage,
};

const sendRouteMessage = {
  path: '/chat',
  controller: sendMessage,
};

module.exports = { getRouteMessage, sendRouteMessage };
