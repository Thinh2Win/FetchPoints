const spendPoints = (total, transactions) => {
  let data = {};
  while (total > 0) {
    let {payer, points} = transactions[0];
    if (data[payer] === undefined) {
      data[payer] = 0;
    }
    if (total < points) {
      data[payer] -= total;
      transactions[0]['points'] -= total;
      total = 0;
    } else if (points < 0) {
      data[payer] += Math.abs(points);
      total += Math.abs(points);
      transactions.shift();
    } else {
      //total is greater than or equal to points
      data[payer] -= points;
      total -= points;
      transactions.shift();
    }
  }
  return data;
};

const updatePayers = (deductedPoints, payers) => {
  // deducted points are negative so we add
  let sum = 0;
  for (let payer in deductedPoints) {
    let points = deductedPoints[payer];
    payers[payer] += points;
    sum += points;
  }
  payers['TOTAL_POINTS'] += sum;
};

module.exports = {
  spendPoints,
  updatePayers
};