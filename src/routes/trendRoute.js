const express = require('express');
const trendsRoute = require('../controllers/trends/getTrends');
const authMiddleware = require('../middleware/auth');

const trendRouter = express.Router();

trendRouter.get('/v1/trend', authMiddleware, trendsRoute);

module.exports = trendRouter;
