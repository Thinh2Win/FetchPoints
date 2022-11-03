const request = require('supertest');

const app = require('../../index.js');

describe('Test example', () => {
  test('GET /payers/points', (done) => {
    request(app)
      .get('/payers/points')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        res.body.TOTAL_POINTS === 0;
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});