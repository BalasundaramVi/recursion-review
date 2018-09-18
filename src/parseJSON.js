// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var index = 0;
  //isSomething helpers
  var nextChar = function() {
  
  };
  
  //combineStuff
};


//   var inputString = json.replace(' ', '');


/////////////////////////////////////////////////////////////
// GRAMMAR HELPER FUNCTIONS
/////////////////////////////////////////////////////////////

var isObject = function(str) {
  
};

var isMembers = function(str) {

};

var isPair = function(str) {

};

var isArray = function(str) {

};

var isElements = function(str) {

};

var isValue = function(str) {

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
