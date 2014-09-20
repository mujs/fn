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
      return func.apply(null, [].concat.apply(argv, arguments));
    };
    
    return partiallyApplied;
  };
  
  return partial;
});

define('mu.fn.pipe', function () {
  'use strict';
  
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
  
  return pipe;
});

define('mu.fn.reverse', function () {
  'use strict';
  
  var reverse = function (func) {
    var reversed = function () {
      return func.apply(null, [].reverse.call(arguments));
    };
    
    return reversed;
  };
  
  return reverse;
});

define('mu.fn', function (require) {
  'use strict';
  
  return {
    apply:   require('mu.fn.apply'),
    partial: require('mu.fn.partial'),
    pipe:    require('mu.fn.pipe'),
    reverse: require('mu.fn.reverse')
  };
});
