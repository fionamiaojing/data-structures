var BinarySearchTree = function(value) {
  
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.depth = 0;
  
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
    
  cb(this.value, this);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breathFirstLog = function(cb) {
  var depthObj = {};
  var maxDepth = 0;
  this.depth = 0;
  depthObj[0] = [this.value];
  var depthcb = function(value, node) {
    if (node.left) {
      node.left.depth = node.depth + 1;
      
      if (node.left.depth in depthObj) {
        depthObj[node.left.depth].push(node.left.value);
      } else {
        depthObj[node.left.depth] = [node.left.value];
        maxDepth = Math.max(maxDepth, node.left.depth);
        console.log('left' + maxDepth);
      } 

    }
    if (node.right) {
      node.right.depth = node.depth + 1;
      if (node.right.depth in depthObj) {
        depthObj[node.right.depth].push(node.right.value);
      } else {
        depthObj[node.right.depth] = [node.right.value];
        maxDepth = Math.max(maxDepth, node.right.depth);
        console.log('right' + maxDepth);
      } 
    }
  };
  
  this.depthFirstLog(depthcb);
  
  for (var i = 0; i <= maxDepth; i++) {
    
    for (var j = 0; j < depthObj[i].length; j++) {
      cb(depthObj[i][j]);
    }
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert() - O(log N) ~ O(N);
 contains() - O(log N) ~ O(N);
 depthfirstlog() - O(N);
 */
