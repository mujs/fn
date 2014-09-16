define('mu.fn', function () {
  'use strict';
  
  var partial = function () {
    var argv = [].slice.call(arguments),
        fn = argv.shift();
        
    var bound = function () {
      return fn.apply(null, [].concat.apply(argv, arguments));
    };
    
    return bound;
  };
  
  return {
    partial: partial
  };
});
