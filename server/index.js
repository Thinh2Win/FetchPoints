const express = require('express');
const timestamp = require('time-stamp');
const { transactions } = require('./data.js');

const app = express();
app.use(express.json());

app.get('/transactions', (req, res) => {
  res.send(transactions);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

//curl -X PUT --header "Content-Type: application/json" --header "Accept: application/json" -d '{"points": 15000}' localhost:3000/spend -w "\n"