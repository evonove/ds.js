'use strict';

var assert = require('assert');
var lib = require('../lib/hashmap.js');

describe('Basic library test', function () {
  it('should answer all questions with YO!', function () {
    var answer = lib.Hashmap('Should I tickle this unicorn?');
    assert.equal(answer, 'YO!');
  });
});
