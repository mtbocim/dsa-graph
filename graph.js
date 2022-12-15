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

      let allNodeValues = [];
      let visited = new Set();

      function dfsTraverse(vertex){
         if(vertex === null) return;

         allNodeValues.push(vertex.value);
         visited.add(vertex);

         for(let node of vertex.adjacent) {
            if(!visited.has(node)) dfsTraverse(node);
         }
      }

      dfsTraverse(start);

      return allNodeValues;

      // while(stack.length >0){
      //    let current = stack.pop()
      //    if(!visited.has(current)){
      //       allNodeValues.push(current);
      //       visited.add(current);
      //    }
      // }
   }

   /** traverse graph with BDS and returns array of Node values */
   breadthFirstSearch(start) {
      let queue = [start];
      let allNodeValues = [];
      let visited = new Set();
      visited.add(start);

      let currentVertex;

      while(queue.length) {
         currentVertex = queue.shift();
         allNodeValues.push(currentVertex.value);

         for(let node of currentVertex.adjacent) {
            if(!visited.has(node)) {
               visited.add(node);
               queue.push(node);
            }
         }
      }

      return allNodeValues;
    }

   /** find the distance of the shortest path from the start vertex to the end vertex */
   distanceOfShortestPath(start, end) {
      if(start === end) return 0;

      let visited = new Set();

      // let startQueue = [[start, 0]];
      // let endQueue = [[end, 0]];

      // while(startQueue.length || endQueue.length) {
      //    let [currentStartVertex, startDistance] = startQueue.shift();
      //    let [currentEndVertex, endDistance] = endQueue.shift();

      //    if(currentStartVertex === currentEndVertex) {
      //       return startDistance + endDistance
      //    }
      // }

      let queue = [[start, 0]];

      while(queue.length) {
         let [currentVertex, distance] = queue.shift();

         if(currentVertex === end) return distance;

         for(let node of currentVertex.adjacent) {
            if(!visited.has(node)) {
               visited.add(node);
               queue.push([node, distance + 1]);
            }
         }
      }
    }
}

module.exports = { Graph, Node }
