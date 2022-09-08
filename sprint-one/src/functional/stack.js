var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    items: [],
    count: 0
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage.items[storage.count] = value;
    storage.count ++;
  };

  someInstance.pop = function() {
    if (storage.count <= 0) {
      return 0;
    }
    var deleteItem = storage.items[storage.count - 1]
    storage.count --;
    return deleteItem;
  };

  someInstance.size = function() {
    return storage.count;
  };

  return someInstance;
};

// var firstStack = Stack();
// firstStack.push('2')
// firstStack.push('3')
// firstStack.pop()

// firstStack.pop()
// firstStack.push('1')

// // firstStack.storage;
// console.log(firstStack.storage)