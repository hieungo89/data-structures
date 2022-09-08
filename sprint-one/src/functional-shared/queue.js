var Queue = function() {
  var someInstance = {
    items: []
  }

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.items.push(value);
}

queueMethods.dequeue = function() {
  return this.items.shift();
}

queueMethods.size = function() {
  return this.items.length;
}