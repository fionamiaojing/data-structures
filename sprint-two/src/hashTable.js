 
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use limitedArray.set 
  //i: index, v
  //o: nothing
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
    this.size++;
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
      this.size++;
    }
    this._storage.set(index, bucket);
  }
  
  if (this.size >= 0.75 * this._limit) {
    this.resize(this._limit * 2);
  }
  
};

HashTable.prototype.resize = function(newLimit) {
  
  var oldStorage = this._storage;
  this._storage = LimitedArray(newLimit);
  this._limit = newLimit;
  this.size = 0;
  var callback = function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var key = bucket[i][0];
        var value = bucket[i][1];
        this.insert(key, value);
      }
    } 
  };
  oldStorage.each(callback.bind(this));
  
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
        this.size--;
        break;
      }
    }
  }
  if (this.size < 0.25 * this._limit) {
    this.resize(Math.ceil(this._limit / 2));
  }

  // this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert() - O(1) ~ O(n);
 retrieve() - O(1) ~ O(n);
 remove() - O(1) ~ O(n);
 */


