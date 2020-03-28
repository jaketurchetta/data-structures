var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  if (this.value === target ) {
    return true;
  }

  var arrayFind = function (array, target) {
    if (array === target ) {
      return true;
    }

    for (var i = 0; i < array.length; i++) {
      var current = array[i];
      if (current.value === target) {
        return true;
      }
      if (current.children) {
        arrayFind(current.children, target);
      }
      return false;
    }
  };
  if (this.children.length > 0) {
    return arrayFind(this.children, target);
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
