/** Node class for graph. */

class Node {
   constructor(value, adjacent = new Set()) {
      this.value = value;
      this.adjacent = adjacent;
   }
   // dfsTraverse(){
   //    for(let node of this.adjacent){
   //       //something something dfsTraverse()
   //    }
   // }
}


/** Graph class. */

class Graph {
   constructor() {
      this.nodes = new Set();
   }

   /** add Node instance and add it to nodes property on graph. */
   addVertex(vertex) {
      this.nodes.add(vertex);
      for (let node of vertex.adjacent) {
         node.adjacent.add(vertex);
      }
   }

   /** add array of new Node instances and adds to them to nodes property. */
   addVertices(vertexArray) {
      for (let vertex of vertexArray) {
         this.addVertex(vertex);
      }
   }

   /** add edge between vertices v1,v2 */
   addEdge(v1, v2) { 
      v2.adjacent.add(v1);
      v1.adjacent.add(v2);
   }

   /** remove edge between vertices v1,v2 */
   removeEdge(v1, v2) { 
      v2.adjacent.delete(v1);
      v1.adjacent.delete(v2);
   }

   /** remove vertex from graph:
    *
    * - remove it from nodes property of graph
    * - update any adjacency lists using that vertex
    */
   removeVertex(vertex) {
      for(let node of vertex.adjacent ){
         node.adjacent.delete(vertex);
      }
      this.nodes.delete(vertex);
    }

   /** traverse graph with DFS and returns array of Node values */
   depthFirstSearch(start) { 

      let allNodes = [];
      let visited = new Set();
      
      function dfsTraverse(vertex){
         if(vertex === null) return [];
      }
      
      
      return dfsTraverse(start);
      // while(stack.length >0){
      //    let current = stack.pop()
      //    if(!visited.has(current)){
      //       allNodes.push(current);
      //       visited.add(current);
      //    }
      // }
   }

   /** traverse graph with BDS and returns array of Node values */
   breadthFirstSearch(start) { }

   /** find the distance of the shortest path from the start vertex to the end vertex */
   distanceOfShortestPath(start, end) { }
}

module.exports = { Graph, Node }
