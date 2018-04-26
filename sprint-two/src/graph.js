

// Instantiate a new graph
var Graph = function() {
  var graph = Object.create(Graph.prototype);
  
  graph.nodes = [];
  graph.edges = {};
  
  return graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //find the index of the node value in the nodes array;
  //remove that index;
  //loop through each neighbour in edges[node]
  //call removeEdge between node and neighbour;
  if (this.nodes.includes(node)) {
    this.nodes.splice(this.nodes.indexOf(node), 1);
    while (this.edges[node].length) {
      console.log(this.edges[node]);
      this.removeEdge(node, this.edges[node][0]);
    }
  } 
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //determine if the edges of graph has key of fromNode;
  //If true
  //determine if the values of that key includes toNode;
  //else return false
  // return this.edges[fromNode]? this.edges[fromNode].includes(toNode) : false;
  if (this.edges.hasOwnProperty(fromNode)) {
    if (this.edges[fromNode].includes(toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
 
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //remove toNodes in the edges object[fromNode]
  //remove fromNode in the edges object[toNode]
  
  if (this.edges.hasOwnProperty(fromNode)) {
    if (this.edges[fromNode].includes(toNode)) {
      this.edges[fromNode].splice(this.edges[fromNode].indexOf(toNode), 1);
      this.edges[toNode].splice(this.edges[toNode].indexOf(fromNode), 1);
    }
  }
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
  V - number of nodes(vertex)
  E - number of edges
  addNode() - O(1)
  contains() - O(V)
  removeNode() - O(V+E)
  addEdge() - O(1)
  hasEdge() - O(V)
  removeEdge() - O(V)
  forEachNode() - O(V) * time complexity of cb;
  
 */


