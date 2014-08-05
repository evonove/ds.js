'use strict';

var should = require('chai').should()
  , Ds = require('../lib/set.js').Ds
  , setObj;

beforeEach(function(done){
  setObj = new Ds.Set();
  done();
});

describe('Set implementation', function () {

  describe('instance', function () {
    it('should create an object with set standard methods', function () {
      setObj.should.be.a('object');
      setObj.in.should.be.a('function');
      setObj.update.should.be.a('function');
      setObj.add.should.be.a('function');
      setObj.remove.should.be.a('function');
      setObj.discard.should.be.a('function');
      setObj.clear.should.be.a('function');
    });

    it('should return how many items are present with computed property', function () {
      setObj.size.should.equal(0);
    });

    it('should be illegal to set size', function () {
      var throws = false;
      try {
        setObj.size = 42;
      } catch (e) {
        throws = true;
      }

      throws.should.be.true;
    });
  });

  describe('working with numbers', function () {
    it('should set an item and increase stored objects', function () {
      setObj.add(0);
      setObj.size.should.equal(1);
    });

    it('should set all items and increase stored objects', function () {
      setObj.update([0, 1]);
      setObj.size.should.equal(2);
    });

    it('should delete an item and decrease stored objects', function () {
      setObj.add(0);
      setObj.size.should.equal(1);
      setObj.remove(0);
      setObj.size.should.equal(0);
    });

    it('should discard an item and decrease stored objects', function () {
      setObj.add(0);
      setObj.size.should.equal(1);
      setObj.discard(0);
      setObj.size.should.equal(0);
    });

    it('should raise an \'Error\' if a delete is requested but item is not present', function () {
      setObj.remove.bind(setObj, 0).should.throw(Error);
    });

    it('should do a noop if a discard is requested but item is not present', function () {
      setObj.discard.bind(setObj, 0).should.not.throw(Error);
    });

    it('should return true if an item is in the set', function () {
      setObj.add(0);
      setObj.in(0).should.be.true;
    });

    it('should return false if an item is not in the set', function () {
      setObj.in(0).should.be.false;
    });

    it('should remove all items in the set', function () {
      setObj.update([0, 1, 2]);
      setObj.size.should.equal(3);
      setObj.clear();
      setObj.size.should.equal(0);
    });

    it('should return an array of stored items', function () {
      setObj.add(0);
      setObj.add(1);
      setObj.add(2);
      setObj.items().should.eql([0, 1, 2]);
    });
  });

  describe('working with strings', function () {
    it('should set an item and increase stored objects');
    it('should set all items and increase stored objects');
    it('should delete an item and decrease stored objects');
    it('should discard an item and decrease stored objects');
    it('should raise an \'Error\' if a delete is requested but item is not present');
    it('should do a noop if a discard is requested but item is not present');
    it('should return true if an item is in the set');
    it('should return false if an item is not in the set');
    it('should remove all items in the set');
    it('should return an array of stored items');
  });

  describe('working with arrays', function () {
    it('should set an item and increase stored objects');
    it('should set all items and increase stored objects');
    it('should delete an item and decrease stored objects');
    it('should discard an item and decrease stored objects');
    it('should raise an \'Error\' if a delete is requested but item is not present');
    it('should do a noop if a discard is requested but item is not present');
    it('should return true if an item is in the set');
    it('should return false if an item is not in the set');
    it('should remove all items in the set');
    it('should return an array of stored items');
  });

  describe('working with objects', function () {
    it('should set an item and increase stored objects');
    it('should set all items and increase stored objects');
    it('should delete an item and decrease stored objects');
    it('should discard an item and decrease stored objects');
    it('should raise an \'Error\' if a delete is requested but item is not present');
    it('should do a noop if a discard is requested but item is not present');
    it('should return true if an item is in the set');
    it('should return false if an item is not in the set');
    it('should remove all items in the set');
    it('should return an array of stored items');
  });
});
