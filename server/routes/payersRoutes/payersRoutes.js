const express = require('express');
const payerRouter = express.Router();
const { payers } = require('../../data.js');

payerRouter.get('/payers/points', (req, res) => {
  res.send(payers);
});

module.exports = {
  payerRouter
};