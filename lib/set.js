(function (root, factory) {
  'use strict';

  // AMD or globals export
  // ---------------------

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.Ds = root.Ds || {};
    root.Ds.Set = factory();
  }

})(this, function () {
  'use strict';

  // Set implementation
  // ------------------

  var Set = function () {
    // Private attributes
    // ------------------

    var _hashCounter = 0
      , _items = {}
      , _size = 0;

    // Private methods
    // ---------------

    function _illegal() {
      throw new Error('Illegal operation for Set');
    }

    function _hash(value) {
      // Hash policy
      return (typeof value) + ' ' + (value instanceof Object ?
        (value._hash || (value._hash = ++_hashCounter)) : value.toString());
    }

    // Privileged methods
    // ------------------

    this.in = function inItem(object) {
      var hash = _hash(object);

      return typeof _items[hash] !== 'undefined';
    };

    this.add = function addItem(object) {
      var hash = _hash(object);

      if (typeof _items[hash] === 'undefined') {
        _size += 1;
      }

      _items[hash] = object;
      return this;
    };

    this.update = function updateItem(arrayItems) {
      for (var i = 0; i < arrayItems.length; i++) {
        var hash = _hash(arrayItems[i]);

        if (typeof _items[hash] === 'undefined') {
          _size += 1;
        }

        _items[hash] = arrayItems[i];
      }

      return this;
    };

    this.remove = function removeItem(key) {
      var hash = _hash(key);
      var object = _items[hash];

      if (typeof object !== 'undefined') {
        _size -= 1;

        // Note: this will not delete the object but leaves an 'undefined' assignment
        // Explanations: the number of set elements are too few and further optimizations aren't required
        delete _items[hash];
      } else {
        throw new Error('KeyError: object ' + object + ' is not stored');
      }

      return this;
    };

    this.discard = function discardItem(object) {
      try {
        this.remove(object);
      } catch (e) {
        // Element wasn't stored
      }

      return this;
    };

    this.clear = function clearItem() {
      for (var key in _items) {
        if (_items.hasOwnProperty(key)) {
          this.remove(_items[key]);
        }
      }

      return this;
    };

    this.items = function arrayItem() {
      return Object.keys(_items).map(function(k){return _items[k]});
    };

    // Public computed properties
    // --------------------------

    Object.defineProperty(this, 'size', {
      get: function () {
        return _size;
      },
      set: function () {
        _illegal();
      }
    });
  };

  return Set;
});
