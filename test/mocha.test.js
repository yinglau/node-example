var f = require('../example/mocha');
var should = require('should');

describe('test/main.test.js', function () {
    it('should equal 55 when n === 10', function () {
        f(10).should.equal(55);
    });

    it('should throw an error: argv must be aaaa number', function() {
        (function(){
            f('哈哈');
        }).should.throw('argv must be aaaa number');
    })
});
