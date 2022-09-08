var Stack = function() {
  this.items = [];
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.items[this.count] = value;
  this.count ++;
}

Stack.prototype.pop = function() {
  if (this.count <=0) {
    return 0;
  }

  var deleteItem = this.items[this.count - 1];
  this.count --;
  return deleteItem;
}

Stack.prototype.size = function() {
  return this.count;
}