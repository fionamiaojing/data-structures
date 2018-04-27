var BinarySearchTree = function(value) {
  
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  
  return tree;  
};

BinarySearchTree.prototype.insert = function(value) {
  //input: value
  //output: nothing
  //may contain recursion
  //First, compare the value to the currentTree value
  //if the value is smaller:
  //check if currentTree.left is null:
  //if true, create another BST with value as input
  //assign that new BST to currentTree.left
  //if false, recall this function with input of currentTree.left;
  //if the valuer is larger:
  //check if currentTree.right is null:
  //if true, create another BST with value as input
  //assign that new BST to currentTree.right
  //if false, recall this function with input of currentTree.right;
    
  if (value < this.value) {
    if (this.left === null) {
      var leftChild = BinarySearchTree(value);
      this.left = leftChild;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      var rightChild = BinarySearchTree(value);
      this.right = rightChild;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  //invoke cb on currentTree
  //check if currentTree.left is not null
  //if true:
  //apply depthFirstLog on currentTree.left
  //check if currentTree.right is not null
  //if true:
  //apply depthFirstLog on currentTree.right
    
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert() - O(log N) ~ O(N);
 contains() - O(log N) ~ O(N);
 depthfirstlog() - O(N);
 */
