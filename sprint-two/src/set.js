var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { // O(1)
  this._storage[item] = item;
};

setPrototype.contains = function(item) { // O(1)
  if (Object.keys(this._storage).includes(item)) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) { // 0(1)
  delete this._storage[item]
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
