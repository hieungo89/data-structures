var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    items: []
  };

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage.items.push(value);
  };

  someInstance.dequeue = function() {
    return storage.items.shift();
  };

  someInstance.size = function() {
    return storage.items.length;
  };

  return someInstance;
};
