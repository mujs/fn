define('mu.fn', function () {
  'use strict';
  
  var apply = function (fn, argv) {
    return fn.apply(null, argv);
  };
  
  var partial = function () {
    var argv = [].slice.call(arguments),
        fn = argv.shift();
        
    var partialApplied = function () {
      return fn.apply(null, [].concat.apply(argv, arguments));
    };
    
    return partialApplied;
  };
  
  return {
    apply: apply,
    partial: partial
  };
});
