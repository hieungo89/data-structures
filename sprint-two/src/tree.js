var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = {};
  _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { // O(1)
  this.children[Object.keys(this.children).length] = Tree(value)
};

treeMethods.contains = function(target) { // O(N)
  let contains = false
  let dfs = function(node){
    if (node.value === target){contains = true}
    if (node.children){
      for (let i = 0; i < Object.keys(node.children).length; i++){
        dfs(node.children[i])
      }
    }
  }
  dfs(this)
  return contains;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
