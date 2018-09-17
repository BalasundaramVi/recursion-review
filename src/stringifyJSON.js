// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return ('null');
  }

  if (typeof obj === 'undefined') {
    return;
  }
  
  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return ('"' + obj + '"');
  }

  if (typeof obj === 'boolean') {
    if (obj === true) {
      return ('true');
    } else {
      return ('false');
    }
  }
  
  if (typeof obj === 'function') {
    return;
  }
  
  if (Array.isArray(obj)) {
    var outputObj = '[';
    for (var i = 0; i < obj.length; i++) {
      outputObj += stringifyJSON(obj[i]) + ',';
    }
    if (outputObj.length !== 1) {
      outputObj = outputObj.slice(0, outputObj.length-1);
    }
    
    outputObj += ']';
    return outputObj;
  }

  if (typeof obj === 'object') {
    var outputObj = '{';
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        continue;
      }
      outputObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }

    if (outputObj.length !== 1) {
      outputObj = outputObj.slice(0, outputObj.length-1);
    }
    
    outputObj += '}';
    return outputObj;
  }

};