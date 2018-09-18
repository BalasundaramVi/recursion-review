// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  if (node === undefined) {
    node = document.body;
  }
  
  // if (node === null) {
  //   return;
  // }

  if (node.classList === undefined) {
    return;
  }

  var output = [];

  if (node.classList.contains(className)) {
    output.push(node);
  }
  for (var i = 0; i < node.childNodes.length; i++) {
    var child = node.childNodes[i];

    var children = getElementsByClassName(className, child);
    if (children !== undefined) {
      output = output.concat(children);
    }
  }
  return (output);
};
