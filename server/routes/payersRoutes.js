const express = require('express');
const payerRouter = express.Router();
const { payers } = require('../data.js');

payerRouter.get('/payers/points', (req, res) => {
  // following the directions to a T and sending back expected JSON
  let copy = {...payers};
  delete copy.TOTAL_POINTS;
  res.send(copy);
});

module.exports = {
  payerRouter
}