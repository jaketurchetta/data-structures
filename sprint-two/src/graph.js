

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.edge = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node] === node) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  delete this.edge[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (this.edge[fromNode][toNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.edge[fromNode] === undefined) {
    this.edge[fromNode] = {};
  }
  this.edge[fromNode][toNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  console.log(this.edge[fromNode][toNode]);
  if (this.edge[fromNode][toNode]) {
    console.log(this.edge[fromNode][toNode]);
    delete this.edge[fromNode][toNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var arrayOfKeys = Object.keys(this.storage);
  _.each(arrayOfKeys, cb);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */