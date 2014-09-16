define('mu.fn', function () {
  'use strict';
  
  var apply = function (fn, argv) {
    return fn.apply(null, argv);
  };
  
  var partialApply = function () {
    var argv = [].slice.call(arguments),
        fn = argv.shift();
        
    var partialApplied = function () {
      return fn.apply(null, [].concat.apply(argv, arguments));
    };
    
    return partialApplied;
  };
  
  var pipe = function () {
    var argv = [].slice.call(arguments),
        source = argv.shift();
    
    var piped = function () {
      return argv.reduce(function (acc, fn) {
        return fn(acc);
      }, source.apply(null, arguments));
    };
    
    return piped;
  };
  
  var reverse = function (fn) {
    var reversed = function () {
      return fn.apply(null, [].reverse.call(arguments));
    };
    
    return reversed;
  };
  
  return {
    apply: apply,
    partial: partialApply,
    pipe: pipe,
    reverse: reverse
  };
});
