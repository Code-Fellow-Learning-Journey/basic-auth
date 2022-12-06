'use strict';

const middleware = require('../src/basic');
const express = require('express');
const router = express.Router();


router.post('/signin', middleware, async (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;

