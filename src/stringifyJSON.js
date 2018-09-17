// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return ('null');
  }

  if (obj === undefined) {
    return ('undefined');
  }
  
  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return obj;
  }

  if (typeof obj === 'boolean') {
    if (obj === true) {
      return ('true');
    } else {
      return ('false');
    }
  }
  
  if (Array.isArray(obj)) {
    var outputObj = '[';
    for (var i = 0; i < obj.length; i++) {
      outputObj += stringifyJSON(obj[i]) + ', ';
    }
    outputObj.splice(0, outputObj.length-2);
    outputObj += ']';
    return outputObj;
  }

  if (typeof obj === 'object') {
  
  }

};