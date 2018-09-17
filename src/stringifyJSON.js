// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number') {
    return obj.toString();
  };

  if (typeof obj === 'string') {
    return obj;
  };

  if (typeof obj === 'boolean') {
    if (obj === true) {
      return('true');
    } else {
      return('false');
    }
  }
};
s