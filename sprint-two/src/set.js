var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //input: string
  //output: nothing
  if (JSON.stringify(item) in this._storage) {
    if (!this._storage[JSON.stringify(item)].includes(item)) {
      this._storage[JSON.stringify(item)].push(item);
    }
  } else {
    this._storage[JSON.stringify(item)] = [item];
  }
};

setPrototype.contains = function(item) {
  //if set._storage contains the key named item
  //if true: return true
  if (JSON.stringify(item) in this._storage) {
    if (this._storage[JSON.stringify(item)].includes(item)) {
      return true;
    }
  }
  return false;

};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    this._storage[JSON.stringify(item)].splice(this._storage[JSON.stringify(item)].indexOf(item), 1);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
  add - O(1)
  contains - O(1)
  remove - O(1)
 */
