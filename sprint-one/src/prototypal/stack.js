var Stack = function() {
  var newInstance = Object.create(stackMethods)
  newInstance.items = [];
  newInstance.count = 0;

  return newInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.items[this.count] = value;
  this.count ++;
}

stackMethods.pop = function() {
  if (this.count <= 0) {
    return 0;
  }

  var deleteItem = this.items[this.count - 1];
  this.count --;
  return deleteItem;
}

stackMethods.size = function() {
  return this.count;
}
