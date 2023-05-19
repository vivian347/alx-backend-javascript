const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe("calculateNumber", function () {
    it('return rounded sum', function () {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    })
    it('return rounded difference', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    })
    it('divides a and b', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    })
    it('divides a and b where b =0 ', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.0), 'Error');
    })
})