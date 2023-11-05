const express = require('express');
const user = require('../controllers/useraAPI/userController');
const getMessage = require('../controllers/message/getMessage');
const sendMessage = require('../controllers/message/sendMessage');

const router = express.Router();

router.get('/v1/chat', getMessage);
router.post('/v1/chat', sendMessage);
router.get('/v1/user', user.getUser);
router.get('/v1/user/:id', user.getUserById);

module.exports = router;
