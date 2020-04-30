const Graph = require('./Graphs')

function createGraph(vertices, edges) {
  var graph = new Graph()

  for (vertex of vertices) {
    graph.addVertex(vertex)
  }

  for (edge of edges) {
    graph.addEdge(edge[0], edge[1], edge[1])
  }

  return graph
}


var vertex = ["1", "2", "3", "4", "5", "6"]
var edges = [["1", "2", 7], ["1", "3", 9], ["1", "6", 14], ["2", "3", 10], ["2", "4", 14], ["3", "6", 2], ["3", "4", 11], ["4", "5", 6], ["6", "5", 9]]

var graphEx = createGraph(vertex, edges)
graphEx.display()