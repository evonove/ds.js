==========
Hashmap.js
==========

Javascript Hash map implementation for keys -> values mapping.

It's really light:
* ``hashmap.min.js``: 388 Bytes (gzip)

Features
--------

* works like a traditional hashmap (``get`` and ``put``)
* Javascript primitives can be used as a key
* Arrays and Javascript Objects can be used as a key
* DOM elements can be used as a key

Requirements
------------

None!

Browsers and Node.js support
---------------------------

It supports the following browsers:

* Chrome 19+
* Firefox 4+
* Safari 5+
* IE9+

It's also available for these Node.js versions:

* 0.8.0+

Quick start
-----------

Four quick start options are available:

* Download the latest release
* Clone the repo: ``git clone https://github.com/evonove/hashmap.js.git``
* Install via bower (browser): ``bower install hashmapjs``
* Install via npm (node.js): ``npm install hashmapjs``

Browser configuration
~~~~~~~~~~~~~~~~~~~~~

Just add this *before* of all ``<script>`` tags where do you want to use ``Hashmap.js``:

.. code-block:: html

    <!-- Latest compiled and minified JavaScript -->
    <script src="bower_components/hashmapjs/dist/hashmap.min.js"></script>

You're done! It now exposes a constructor in your global namespace: ``window.Hashmap``.

Node.js configuration
~~~~~~~~~~~~~~~~~~~~~

Just require this library in your code:

.. code-block:: javascript

    var Hashmap = require('../lib/hashmap.js').Hashmap

You're done! Now you can use ``Hashmap`` constructor.

Usage
~~~~~

In your code simply create and access your new hashmap:

.. code-block:: javascript

    // Create useful objects
    var object = { description: 'This is a plain javascript object' };
    var myMap = new Hashmap();                      // Create a new hashmap

    myMap.put(object, ['mapped', 'array']);         // Add element to hashmap
    var item = myMap.get(object);                   // Get element from hashmap
    assert.deepEqual(item, ['mapped', 'array']);    // true

You can even use DOM elements as hashmap keys:

.. code-block:: javascript

    // Create useful objects
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);

    myMap.put(newDiv, { title: 'this is my model' });
    var item = myMap.get(newDiv);
    assert.deepEqual(item, { title: 'this is my model' });      // true

License
-------

BSD-2 license. See ``LICENSE`` for more details.
