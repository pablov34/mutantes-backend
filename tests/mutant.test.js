const request =  require('supertest')
const expect =  require('chai')
const App = require('../app')

 DNAMUTANTE_1 = [
  'ATGCGA',
  'CAGTGC',
  'TTATGG',
  'AGAAGG',
  'CCCCTA',
  'TCGCTG',
];

 const DNAMUTANTE_2 = [
  'GTGCGA',
  'CACTGC',
  'TCATGG',
  'CGATAG',
  'CCCTTA',
  'TCCCCG',
];

 const DNAHUMANO_1 = [
  'GTGCGA',
  'CACTAC',
  'TCCTGG',
  'CGAAAG',
  'CCCGTA',
  'TCGCTG',
];

 const DNAHUMANO_2 = [
  'GTGCGA',
  'CACTGC',
  'TCATGG',
  'CGAAAG',
  'CCCGTA',
  'TCGCTG',
];

 const DNAINVALID_1 = [
  'ATGCG',
  'CAGTGC',
  'TTATOG',
  'TGAAGG',
  'CCCCTA',
  'TCGCTG',
];

 const DNAINVALID_2 = [
  'ATGCGA',
  'CAGTGC',
  'TTATOG',
  'XGAAGG',
  'CCCCTA',
  'TCGCTG',
];

const DNAINVALID_3 = [
  'ATGCGC',
  'CAGTGC',
  'TTATOG',
  'TGAAG',
  'CCCCTA',
  'TCGCTG',
];

/* 
* Testing API 
*/

  describe('Test Endpoint Mutant', () => {
    it('Insert Mutant-1', (done) => {
      request(App)
        .post('/mutant')
        .set('Accept', 'application/json')
        .expect('Content-Type',/json/)
        .send({ dna: DNAMUTANTE_1 })
        .expect(200, done)
       
    });

    it('Insert Mutant-2', (done) => {
      request(App)
        .post('/mutant')
        .send({ dna: DNAMUTANTE_2 })
        .set('Accept', 'application/json')
        .expect('Content-Type',/json/)
        .expect(200, done)
    });

    it('Insert Human-1', (done) => {
      request(App)
        .post('/mutant')
        .send({ dna: DNAHUMANO_1 })
        .set('Accept', 'application/json')
        .expect('Content-Type',/json/)
        .expect(403, done)
    });

    it('Insert Human-2', (done) => {
      request(App)
        .post('/mutant')
        .send({ dna: DNAHUMANO_2 })
        .set('Accept', 'application/json')
        .expect('Content-Type',/json/)
        .expect(403, done)
    });

    it('Insert Invalid-1', (done) => {
      request(App)
        .post('/mutant')
        .send({ dna: DNAINVALID_1 })
        .set('Accept', 'application/json')
        .expect(400, done)
    });

    it('Insert Invalid-2', (done) => {
      request(App)
        .post('/mutant')
        .send({ dna: DNAINVALID_2 })
        .set('Accept', 'application/json')
        .expect(400, done)
    });

    it('Insert Invalid-3', (done) => {
      request(App)
        .post('/mutant')
        .send({ dna: DNAINVALID_3 })
        .set('Accept', 'application/json')
        .expect(400, done)
    });
  });