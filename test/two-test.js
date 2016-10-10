var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var TestSummary = require('../src/app/test-summary');

describe('TestSummary', function() {
  it('getSubtotal() should return 0 if no items are passed in', function() {
    var testSummary = new TestSummary([]);
    expect(testSummary.getSubtotal()).to.equal(0);
  });
});