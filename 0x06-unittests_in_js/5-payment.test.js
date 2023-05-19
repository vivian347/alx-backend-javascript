const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        if (!consoleSpy) {
            consoleSpy = sinon.spy(console);
        }
    });

    afterEach(() => {
        consoleSpy.log.resetHistory();
    });

    it('should log the correct total and be called once usins 100, 20', () => {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.log.calledOnce).to.be.true;
        expect(consoleSpy.log.calledWith('The total is: 120')).to.be.true;
    });

    it('should log the correct total and be called once usins 10,10', () => {
        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.log.calledOnce).to.be.true;
        expect(consoleSpy.log.calledWith('The total is: 20')).to.be.true;
    })
})
