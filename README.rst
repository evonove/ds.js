=====
ds.js
=====

Javascript data structures to store primitive and complex Javascript objects.
Every library file is an implementation of a data structure.

Browsers and Node.js support
----------------------------

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
* Clone the repo: ``git clone https://github.com/evonove/ds.js.git``
* Install via bower (browser): ``bower install ds.js``
* Install via npm (node.js): ``npm install ds.js``

Available data structures
-------------------------

Hashmap
~~~~~~~

``hashmap.min.js``: 400 Bytes (gzip)

Features
~~~~~~~~

* works like a traditional hashmap (``get`` and ``put``)
* Javascript primitives can be used as a key
* Arrays and Javascript Objects can be used as a key
* DOM elements can be used as a key
* AMD module support

Browser configuration
~~~~~~~~~~~~~~~~~~~~~

Just add this *before* of all ``<script>`` tags where do you want to use ``ds.js``:

.. code-block:: html

    <!-- Latest compiled and minified JavaScript -->
    <script src="bower_components/ds.js/dist/hashmap.min.js"></script>

You're done! It now exposes a constructor in your global namespace: ``window.Ds.HashMap``.

Node.js configuration
~~~~~~~~~~~~~~~~~~~~~

Just require this library in your code:

.. code-block:: javascript

    var Ds = require('node_modules/ds.js/dist/hashmap.min.js').Ds

You're done! Now you can use ``Ds.HashMap`` constructor.

Usage
~~~~~

In your code simply create and access your new hashmap:

.. code-block:: javascript

    // Create useful objects
    var object = { description: 'This is a plain javascript object' };
    var myMap = new Ds.HashMap();                   // Create a new hashmap

    myMap.put(object, ['mapped', 'array']);         // Add element to hashmap
    var item = myMap.get(object);                   // Get element from hashmap
    assert.deepEqual(item, ['mapped', 'array']);    // true

You can even use DOM elements as a keys:

.. code-block:: javascript

    // Create useful objects
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);

    myMap.put(newDiv, { statement: 'this is my model instance' });
    var item = myMap.get(newDiv);
    assert.deepEqual(item, { statement: 'this is my model instance' });      // true

License
-------

BSD-2 license. See ``LICENSE`` for more details.
