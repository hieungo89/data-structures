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