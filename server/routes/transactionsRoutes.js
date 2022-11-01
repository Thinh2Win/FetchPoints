const express = require('express');
const { spendPoints, updatePayers } = require('../helpers.js');
const { transactions, payers } = require('../data.js');

const transactionsRouter = express.Router();

transactionsRouter.get('/transactions', (req, res) => {
  res.send(transactions);
});

transactionsRouter.post('/transactions', (req, res) => {
  let {payer, points, timestamp} = req.body;
  transactions.push(req.body);
  if (payers[payer] === undefined) {
    payers[payer] = points;
  } else {
    payers[payer] += points;
  }
  payers['TOTAL_POINTS'] += points;
  transactions.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  res.send('transaction added');
});

transactionsRouter.put('/transactions/spend', (req, res) => {
  let reqPoints = req.body.points;
  if (payers['TOTAL_POINTS'] < reqPoints) {
    res.send('insufficient amount of points');
  } else {
    transactions.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    let data = spendPoints(reqPoints, transactions);
    updatePayers(data, payers);
    res.send(data);
  }
});

module.exports = {
  transactionsRouter
};