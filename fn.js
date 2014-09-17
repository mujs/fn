define('mu.fn', function () {
  'use strict';
  
  var apply = function (func, argv) {
    return func.apply(null, argv);
  };
  
  var partial = function () {
    var argv = [].slice.call(arguments),
        func = argv.shift();
        
    var partiallyApplied = function () {
      return func.apply(null, [].concat.apply(argv, arguments));
    };
    
    return partiallyApplied;
  };
  
  var pipe = function () {
    var argv = [].slice.call(arguments),
        source = argv.shift();
    
    var piped = function () {
      return argv.reduce(function (acc, func) {
        return func(acc);
      }, source.apply(null, arguments));
    };
    
    return piped;
  };
  
  var reverse = function (func) {
    var reversed = function () {
      return func.apply(null, [].reverse.call(arguments));
    };
    
    return reversed;
  };
  
  return {
    apply: apply,
    partial: partial,
    pipe: pipe,
    reverse: reverse
  };
});
