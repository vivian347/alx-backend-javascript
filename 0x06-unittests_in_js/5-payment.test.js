const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should log the correct total and be called once usins 100, 20', () => {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnce).to.be.true
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('should log the correct total and be called once usins 10,10', () => {
        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.calledOnce).to.be.true
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    })
})
