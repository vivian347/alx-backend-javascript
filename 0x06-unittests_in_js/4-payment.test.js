const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const expect = require('chai').expect;
const sinon = require('sinon');


describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi calls console.log with right args', () => {
        const mySpy = sinon.spy(console);
        const myStub = sinon.stub(Utils, 'calculateNumber');

        myStub.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(myStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(myStub.callCount).to.be.equal(1);
        expect(mySpy.log.calledWith('The total is: 10')).to.be.true;
        expect(mySpy.log.callCount).to.be.equal(1);

        myStub.restore();
        mySpy.log.restore();
    })
})