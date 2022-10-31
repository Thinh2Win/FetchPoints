const express = require('express');

const { transactions, payers } = require('./data.js');
const { spendPoints, updatePayers } = require('./helpers.js');

const app = express();
app.use(express.json());

app.get('/payer/points', (req, res) => {
  res.send(payers);
});

app.get('/transactions', (req, res) => {
  res.send(transactions);
});

app.post('/transactions', (req, res) => {
  let {payer, points, timestamp} = req.body;
  transactions.push(req.body);
  if (payers[payer] === undefined) {
    payers[payer] = points;
  } else {
    payers[payer] += points;
    payers['TOTAL'] += points;
  }
  transactions.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  res.send('transaction saved');
});

app.put('/transactions/spend', (req, res) => {
  let reqPoints = req.body.points;
  if (payers['TOTAL'] < reqPoints) {
    res.send('insufficient amount of points');
  } else {
    transactions.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    let data = spendPoints(reqPoints, transactions);
    updatePayers(data, payers);
    res.send(data);
  }
});

app.get('/', (req, res) => res.send('hello there'));

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

//curl -X PUT --header "Content-Type: application/json" --header "Accept: application/json" -d '{"points": 15000}' localhost:3000/spend -w "\n"

// curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d '{"payer":"DANNON", "points":500}' localhost:3000/transactions -w "\n"