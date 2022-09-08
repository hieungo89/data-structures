var Queue = function() {
  var newInstance = Object.create(queueMethods);
  newInstance.items = [];

  return newInstance;
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