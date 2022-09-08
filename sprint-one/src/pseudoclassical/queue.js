var Queue = function() {
  this.items = [];
};

Queue.prototype.enqueue = function(value) {
  this.items.push(value);
}

Queue.prototype.dequeue = function() {
  return this.items.shift();
}

Queue.prototype.size = function() {
  return this.items.length;
}