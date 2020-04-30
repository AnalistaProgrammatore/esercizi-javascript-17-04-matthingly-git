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

var vertex = ["Seattle", "Minneapolis", "S.Francisco", "Los Angeles", "Las Vegas", "Denver", "Dallas", "Chicago", "W.DC", "Miami", "N.Y.", "Boston"]
var edges = [
  ["Seattle", "S.Francisco", 1306], 
  ["Seattle", "Denver", 2161], 
  ["Seattle", "Minneapolis", 2661], 
  ["S.Francisco", "Los Angeles", 629], 
  ["S.Francisco", "Las Vegas", 919], 
  ["Los Angeles", "Las Vegas", 435],  
  ["Las Vegas", "Denver", 1225], 
  ["Las Vegas", "Dallas", 1983], 
  ["Denver", "Dallas", 1258],
  ["Denver", "Minneapolis", 1483],
  ["Minneapolis", "Dallas", 1532],
  ["Minneapolis", "Chicago", 661],
  ["Chicago", "W.DC", 1145],
  ["Chicago", "Boston", 1613],
  ["Dallas", "W.DC", 2113],
  ["Dallas", "Miami", 2161],
  ["W.DC", "Boston", 725],
  ["W.DC", "N.Y.", 383],
  ["W.DC", "Miami", 1709],
  ["N.Y.", "Boston", 338],
  ["N.Y.", "Miami", 2145]
]

var city = createGraph(vertex, edges)

city.display()

city.bfs("Seattle", current => console.log(current))
console.log("\n")
city.dfs("Seattle", current => console.log(current))
console.log("\n")
console.log(city.dijkstra("Seattle"))