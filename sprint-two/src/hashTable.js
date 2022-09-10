var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }

  let getStorage = this._storage.get(index)
  for (let i = 0; i < getStorage.length; i++){
    if(getStorage[i][0] === k) {
      getStorage[i][1] = v;
      break;
    }
  }
  this._storage.get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // actual hashing
  let getStorage = this._storage.get(index)
  //deals with collisions
  for (let i = 0; i < getStorage.length; i++){
    if(getStorage[i][0] === k) {
      return getStorage[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // actual hashing
  let getStorage = this._storage.get(index)
  //deals with collisions
  for (let i = 0; i < getStorage.length; i++){
    if(getStorage[i][0] === k) {
      getStorage.splice(i,1);
    }
  }
};

// X = new HashTable
// Y = getIndexBelowMaxForKey('dog',2)
// X.set(Y,'cat')
// X.set(0,'dog')
// X.set(0,'cat')
// X._storage.set(7,'does this even work?')
// // console.log('it works?', X._storage.get(2))
// // console.log('Y is', Y)
// // console.log('X is', X)
// X.insert('hello',6)

// console.log('is this undefined?', X._storage.get(7))
/*
 * Complexity: What is the time complexity of the above functions?
 */

