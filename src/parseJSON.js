// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === undefined) {
    return;
  }
  
  if (isObject(json)) {
    var object = toObject(json);
    
  }
  
  //combineStuff
  var container = undefined;

  return outputFunction();
};


//   var inputString = json.replace(' ', '');

var outputFunction = function(str) {
  if (isObject[json]) {
    container = {};
  } else if ()

  return outputFunction(substring); 
};

"""" 3 """"


/////////////////////////////////////////////////////////////
// GRAMMAR HELPER FUNCTIONS
/////////////////////////////////////////////////////////////

var toObject = function(str) {
  var quotes = 0;
  for (var i = 0; i < str.length; i++) {
    if(str[i] === '"') {
      quotes++;
    }
    if (quotes === 2) {
      quotes = 0;
    }

    if (str[i] === ':' && quotes !== 1) {
      
    }
  }

};

var isObject = function(str) {
  
};

var isMembers = function(str) {

};

var isPair = function(str) {

};

var isArray = function(str) {

};

var isElements = function(str) {
  var output = undefined;
  if (isValue(str)) {
    return true;
  }


  return false;
};

var isValue = function(str) {
  return (isNumber(str) || isString(str) || isBoolean(str) || isNull(str));
};

/////////////////////////////////////////////////////////////
// VALUE HELPER FUNCTIONS
/////////////////////////////////////////////////////////////

var isNumber = function(val) {
  return !(isNaN(val));
};
  
var isString = function(val) {
  return (val[0] === '"');
};

var isBoolean = function(val) {
  if (val === true || val === false) {
    return true;
  } else {
    return false;
  }
};

var isNull = function(val) {
  return (val === null);
};
