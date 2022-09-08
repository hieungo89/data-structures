class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(value) {
    this.items[this.count] = value;
    this.count ++;
  }

  pop() {
    if (this.count <= 0) {
      return 0;
    }
    var deleteItem = this.items[this.count - 1];
    this.count --;
    return deleteItem;
  }

  size() {
    return this.count;
  }
}