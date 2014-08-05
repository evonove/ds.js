(function (root, factory) {
  'use strict';

  // AMD or globals export
  // ---------------------

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.Ds = root.Ds || {};
    root.Ds.HashMap = factory();
  }

})(this, function () {
  'use strict';

  // Hash map implementation
  // -----------------------

  var HashMap = function () {
    // Private attributes
    // ------------------

    var _hashCounter = 0
      , _size = 0;

    // Private methods
    // ---------------

    function _illegal() {
      throw new Error('Illegal operation for Hashmap');
    }

    function _hash(value) {
      // Hash policy
      return (typeof value) + ' ' + (value instanceof Object ?
        (value._hash || (value._hash = ++_hashCounter)) : value.toString());
    }

    // Privileged methods
    // ------------------

    this.get = function getItem(key) {
      var item = this[_hash(key)];
      return item && item.value;
    };

    this.put = function putItem(key, value) {
      var hash = _hash(key);

      if (typeof this[hash] === 'undefined') {
        this[hash] = { key: key, value: value };

        _size += 1;
      } else {
        this[hash].value = value;
      }

      return this;
    };

    this.remove = function removeItem(key) {
      var hash = _hash(key);
      var item = this[hash];

      if (typeof item !== 'undefined') {
        _size -= 1;

        // Note: this will not delete the object but leaves an 'undefined' assignment
        // Explanations: the number of hashmap elements are too few and further optimizations aren't required
        delete this[hash];
      }

      return this;
    };

    // Public computed properties
    // --------------------------

    Object.defineProperty(this, "size", {
      get: function () {
        return _size;
      },
      set: function () {
        _illegal();
      }
    });
  };

  return HashMap;
});
