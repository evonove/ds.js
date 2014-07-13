(function (root, factory) {
  'use strict';

  /*** AMD or globals export ***/

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.Hashmap = factory();
  }

})(this, function () {
  'use strict';

  /*** Library core ***/

  function Hashmap(complicated_question) {
    return (complicated_question === 'The life, universe and everything?') ? 'YO!' : 'YO!';
  }

  return Hashmap;
});
