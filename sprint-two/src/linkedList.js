var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {  // O(1)
    var tempNode = Node(value)
    if (list.tail) {
      list.tail.next = tempNode
    }

    list.tail = tempNode;

    if (!list.head) {
      list.head = list.tail;
    }
  };

  list.removeHead = function() {    // O(1)
    var container = list.head.value;
    list.head = list.head.next;
    return container;
  };

  list.contains = function(target) {  // O(n)
    var isThere = false;

    var dfs = function(node) {
      if (node.value === target) {
        isThere = true;
      }
      if (node.next) {
        dfs(node.next);
      }
    }
     dfs(list.head);

    return isThere;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


