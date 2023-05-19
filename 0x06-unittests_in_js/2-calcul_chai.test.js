const expect = require('chai').expect;
const calculateNumber = require('./1-calcul')

describe("calculateNumber", function () {
    it('return rounded sum', function () {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    })
    it('return rounded difference', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    })
    it('divides a and b', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    })
    it('divides a and b where b =0 ', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0.0)).to.equal('Error');
    })
})