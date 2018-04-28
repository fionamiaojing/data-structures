var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new tree with value of value;
  // add to the parentTree's children list;
  var tree = Tree(value);
  this.children.push(tree);
  tree.parent = this;
  
};

treeMethods.contains = function(target) {
  // if the value of the current tree === target
  //if true:
  //return true:
  //if false:
  //iterate among the chilren and repeat above
  //if not found return false
  
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  var parent = this.parent;
  this.parent.children.splice(this.parent.children.indexOf(this), 1);
  this.parent = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild():O(1)
 contains():O(n)
 */
