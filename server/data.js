const user = {
  points: 0,
};

const payers = {
  'DANNON': 1100,
  'UNILEVER': 200,
  'MILLER COORS': 10000,
  'TOTAL': 11300
};

const transactions = [
  { 'payer': 'DANNON', 'points': 300, 'timestamp': '2022-10-31T10:00:00Z' },
  { 'payer': 'UNILEVER', 'points': 200, 'timestamp': '2022-10-31T11:00:00Z' },
  { 'payer': 'DANNON', 'points': -200, 'timestamp': '2022-10-31T15:00:00Z' },
  { 'payer': 'MILLER COORS', 'points': 10000, 'timestamp': '2022-11-01T14:00:00Z' },
  { 'payer': 'DANNON', 'points': 1000, 'timestamp': '2022-11-02T14:00:00Z' }
];

module.exports = {
  user,
  transactions,
  payers
};