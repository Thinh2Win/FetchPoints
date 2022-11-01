const express = require('express');
const { payerRouter } = require('./routes/payersRoutes.js');
const { transactionsRouter } = require('./routes/transactionsRoutes.js');

const app = express();
app.use(express.json());

app.use(payerRouter);
app.use(transactionsRouter);

app.all('/', (req, res) => res.send('hello there! You might have mis-spelled an endpoint'));

app.listen(3000, () => {
  console.log('App listening on port 3000');
});