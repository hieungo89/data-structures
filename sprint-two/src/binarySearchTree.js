var BinarySearchTree = function(value) {
    let tree = Object.create(BSTMethods);
    tree.value = value;
    tree.left = null;
    tree.right = null;
    tree.storage = []
    return tree;
};

let BSTMethods = {};

BSTMethods.insert = function(value) { // O(log(N))
  let dfs = function (node){
      // check for left
      if (value < node.value){
        if (node.left){ dfs(node.left)}
        else {node.left = BinarySearchTree(value)}
      }
      // check for right
      if (value > node.value){
        if (node.right){ dfs(node.right)}
        else {node.right = BinarySearchTree(value)}
      }
  }
  dfs(this)
}

BSTMethods.contains = function(value) { // O(log(N))
  let isThere = false;

  let dfs = function (node){
    // check for left
    if (value === node.value){
      return isThere = true;
    }
    if (value < node.value){
      if (node.left){ dfs(node.left)}
    }
    // check for right
    if (value > node.value){
      if (node.right){ dfs(node.right)}
    }
  }
  dfs(this)

  return isThere;
}

BSTMethods.depthFirstLog = function(callback) {
  let dfs = function (node){
      callback(node.value)
      if (node.left){dfs(node.left)}
      if (node.right){dfs(node.right)}
  }
  dfs(this)
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
