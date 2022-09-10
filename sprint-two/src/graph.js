

// Instantiate a new graph
let Graph = function(value) {
  this.edge = {};
  this.value = value;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  let tempGraph = new Graph(node);
  tempGraph.edge[this.value] = this;
  this.edge[node] = tempGraph;
};



// let helperDFS = function(param1, param2) {
//   let checked = {};

//   let dfs = function(node) {
//     if (node.value === param2) {
//       if (param1 === 'contains') {
//         isTrue = true;
//       } else if (param1 === 'removeNode') {
//         delete node.value;
//       }
//     }

//     if (checked[node.value]) {
//       return;
//     }

//     checked[node.value] = true;

//     _.each(node.edge, function(item) {
//       dfs(item);
//     });
//   }
//   dfs(this);
// }



// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  let isTrue = false;
  let checked = {};

  let dfs = function(node) {
    if (node.value === value) {
      isTrue = true;
    }

    if (checked[node.value]) {
      return;
    }

    checked[node.value] = true;

    _.each(node.edge, function(item) {
      dfs(item);
    });
  }
  dfs(this);
  return isTrue;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  let checked = {};

  let dfs = function(node) {
    if (Object.keys(node.edge).includes(String(value))) {
      delete node.edge[value];  // still works, BUT only delete object keys/value properties
    }

    if (checked[node.value]) {
      return;
    }

    checked[node.value] = true;

    _.each(node.edge, function(item) {
      dfs(item);
    });
  }
  dfs(this);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (fromNode === toNode) {
    return true;
  }
  let checked = {};
  let isTrue = false;

  let dfs = function(node) {
    if (node.value === fromNode) {
      if (Object.keys(node.edge).includes(String(toNode))){
        isTrue = true;
      }
    }

    if (checked[node.value]) {
      return;
    }

    checked[node.value] = true;

    _.each(node.edge, function(item) {
      dfs(item);
    });
  }
  dfs(this);
  return isTrue;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  let from
  let to
  let checked = {};

  let dfs = function(node) {
    if (node.value === fromNode) {
      from = node;
    }
    if (node.value === toNode) {
      to = node;
    }

    if (checked[node.value]) {
      return;
    }

    checked[node.value] = true;

    _.each(node.edge, function(item) {
      dfs(item);
    });
  }
  dfs(this);
  to.edge[fromNode] = from;
  from.edge[toNode] = to;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let from
  let to
  let checked = {};

  let dfs = function(node) {
    if (node.value === fromNode) {
      if (Object.keys(node.edge).includes(String(toNode))){
        from = node;
      }
    }
    if (node.value === toNode) {
      if (Object.keys(node.edge).includes(String(fromNode))){
        to = node;
      }
    }

    if (checked[node.value]) {
      return;
    }

    checked[node.value] = true;

    _.each(node.edge, function(item) {
      dfs(item);
    });
  }
  dfs(this);
  delete from.edge[toNode]
  delete to.edge[fromNode]
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  let checked = {};

  let dfs = function(node) {
    cb(node.value);
    if (checked[node.value]) {
      return;
    }

    checked[node.value] = true;

    _.each(node.edge, function(item) {
      dfs(item);
    });
  }
  dfs(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
