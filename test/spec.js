'use strict';

var assert = require('assert')
  , Hashmap = require('../lib/hashmap.js').Hashmap
  , hashmap;

beforeEach(function(done){
  hashmap = new Hashmap();
  done();
});

describe('Hashmap implementation', function () {

  it('should return how many items are present with computed property', function () {
    assert.equal(hashmap.size, 0);
  });

  it('should be illegal to set hashmap size', function () {
    var throws = false;
    try {
      hashmap.size = 42;
    } catch (e) {
      throws = true;
    }

    assert.equal(throws, true);
  });

  it('should return undefined if key is not present', function () {
    var item = hashmap.get('Hello');
    assert.equal(item, undefined);
  });

  // Numeric type
  // ------------

  it('should set a number as a key and increase stored objects', function () {
    hashmap.put(0, 'Hello world');
    assert.equal(hashmap.size, 1);
  });

  it('should delete a number key and decrease stored objects', function () {
    hashmap.put(0, 'Hello world');
    assert.equal(hashmap.size, 1);
    hashmap.remove(0);
    assert.equal(hashmap.size, 0);
  });

  it('should return an item with number key', function () {
    hashmap.put(0, 'Hello world');
    var item = hashmap.get(0);
    assert.equal(item, 'Hello world');
  });

  it('should update an item with number key', function () {
    var item;
    hashmap.put(0, [1, 2, 3]);
    item = hashmap.get(0);
    assert.deepEqual(item, [1, 2, 3]);

    hashmap.put(0, {answer: '42'});
    item = hashmap.get(0);
    assert.deepEqual(item, {answer: '42'});
  });

  // String type
  // -----------

  it('should set a string as a key and increase stored objects', function () {
    hashmap.put('Hello', 'World');
    assert.equal(hashmap.size, 1);
  });

  it('should delete a string key and decrease stored objects', function () {
    hashmap.put('Hello', 'World');
    assert.equal(hashmap.size, 1);
    hashmap.remove('Hello');
    assert.equal(hashmap.size, 0);
  });

  it('should return an item with string key', function () {
    hashmap.put('Hello', 'World');
    var item = hashmap.get('Hello');
    assert.equal(item, 'World');
  });

  it('should update an item with string key', function () {
    var item;
    hashmap.put('answer', 0);
    item = hashmap.get('answer');
    assert.equal(item, 0);

    hashmap.put('answer', 'The Answer to the Ultimate Question of Life, The Universe, and Everything');
    item = hashmap.get('answer');
    assert.equal(item, 'The Answer to the Ultimate Question of Life, The Universe, and Everything');
  });

  // Array type
  // ----------

  it('should set an array as a key and increase stored objects', function () {
    var array = [1, 2, 3];
    hashmap.put(array, 'This is a plain array');
    assert.equal(hashmap.size, 1);
  });

  it('should delete an array key and decrease stored objects', function () {
    var array = [1, 2, 3];
    hashmap.put(array, 'This is a plain array');
    assert.equal(hashmap.size, 1);

    hashmap.remove(array);
    assert.equal(hashmap.size, 0);
  });

  it('should return an item with array key', function () {
    var array = [1, 2, 3];
    hashmap.put(array, 'This is a plain array');
    var item = hashmap.get(array);
    assert.equal(item, 'This is a plain array');
  });

  it('should update an item with array key', function () {
    var item;
    var array = [1, 2, 3];
    hashmap.put(array, 'This is a plain array');

    item = hashmap.get(array);
    assert.equal(item, 'This is a plain array');

    hashmap.put(array, 'The Answer to the Ultimate Question of Life, The Universe, and Everything');
    item = hashmap.get(array);
    assert.equal(item, 'The Answer to the Ultimate Question of Life, The Universe, and Everything');
  });

  // Object
  // ------

  it('should set an object as a key and increase stored objects', function () {
    var object = {hello: 'Hello world!'};
    hashmap.put(object, 'This is a plain object');
    assert.equal(hashmap.size, 1);
  });

  it('should delete an object key and decrease stored objects', function () {
    var object = {hello: 'Hello world!'};
    hashmap.put(object, 'This is a plain object');
    assert.equal(hashmap.size, 1);

    hashmap.remove(object);
    assert.equal(hashmap.size, 0);
  });

  it('should return an item with object key', function () {
    var object = {hello: 'Hello world!'};
    hashmap.put(object, 'This is a plain object');
    var item = hashmap.get(object);
    assert.equal(item, 'This is a plain object');
  });

  it('should update an item with object key', function () {
    var item;
    var object = {hello: 'Hello world!'};
    hashmap.put(object, 'This is a plain object');

    item = hashmap.get(object);
    assert.equal(item, 'This is a plain object');

    hashmap.put(object, 'The Answer to the Ultimate Question of Life, The Universe, and Everything');
    item = hashmap.get(object);
    assert.equal(item, 'The Answer to the Ultimate Question of Life, The Universe, and Everything');
  });

  it('should store two objects even if they are \'similiar\'', function () {
    var firstObject = {hello: 'Hello world!'};
    var secondObject = {hello: 'Hello world!'};

    hashmap.put(firstObject, 'First object');
    hashmap.put(secondObject, 'Second object');
    assert.equal(hashmap.size, 2);
    assert.equal(hashmap.get(firstObject), 'First object');
    assert.equal(hashmap.get(secondObject), 'Second object');
  });
});
