var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //input: string
  //output: nothing
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  //if set._storage contains the key named item
  //if true: return true
  
  return (item in this._storage);
};

setPrototype.remove = function(item) {
  if (item in this._storage) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  add - O(1)
  contains - O(1)
  remove - O(1)
 */
