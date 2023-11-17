const express = require('express');

const { trend } = require('../../controllers/trends/getTrends');

const trendsRoute = express.Router();

trendsRoute.get('/v1/trends', trend);

module.exports = trendsRoute;
