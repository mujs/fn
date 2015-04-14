define('mu.fn.apply', function () {
  'use strict';
  
  var apply = function (func, argv) {
    return func.apply(null, argv);
  };
  
  return apply;
});

define('mu.fn.partial', function () {
  'use strict';
  
  var partial = function () {
    var argv = [].slice.call(arguments),
        func = argv.shift();
        
    var partiallyApplied = function () {
      var args = [].slice.call(arguments);
      return func.apply(null, argv.concat(args));
    };
    
    return partiallyApplied;
  };
  
  return partial;
});

define('mu.fn.debounce', function () {
  'use strict';

  var debounce = function (fn, delay) {
    var timer = null;

    var debounced = function () {
      var args = arguments;
      clearTimeout(timer);

      timer = setTimeout(function () {
        fn.apply(null, args);
      }, delay || 0);
    };

    return debounced;
  };

  return debounce;
});

define('mu.fn', function (require) {
  'use strict';
  
  return {
    apply:    require('mu.fn.apply'),
    partial:  require('mu.fn.partial'),
    debounce: require('mu.fn.debounce')
  };
});
