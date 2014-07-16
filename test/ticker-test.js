'use strict';

var test = require('tap').test;
var Ticker = require('../lib/ticker').factory();

test('Read dummy ticker', function(t){
  Ticker.ticker(['TWD'], function(err, results) {
    t.plan(5+1);
    t.equal(err, null, 'There should be no error');
    console.log(results);
    for (var currency in results) {
      var result = results[currency];
      t.notEqual(result, null, 'There should be a result');
      t.equal(result.error, undefined, 'The result should contain no error');
      t.equal(result.currency, currency, 'The result should be ' + currency);
      t.notEqual(result.rate, undefined, 'A rate should have been returned');
      t.ok(parseFloat(result.rate, 10), 'The rate should be a float');
    }
    t.end();      
  });
});
