 
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use limitedArray.set 
  //i: index, v
  //o: nothing
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var bucket = this._storage.get(index);
    var found = false;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        found = true;
        break;
      }
    }
    if (!found) {
      bucket.push([k, v]);
    }
    this._storage.set(index, bucket);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //retrieve the buckets at index
  //loop through each tuple to find the key(k);
  
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
        break;
      }
    }
  }

  // this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert() - O(1) ~ O(n);
 retrieve() - O(1) ~ O(n);
 remove() - O(1) ~ O(n);
 */


