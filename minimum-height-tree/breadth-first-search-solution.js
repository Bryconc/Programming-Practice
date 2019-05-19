const findMinHeightTrees = (n, edges) => {
  if (n === 1) {
    return 0;
  }

  const adjList = getAdjacencyList(n, edges);
  let leaves = getLeaves(adjList);

  while (n > 2) {
    n -= leaves.length;
    const newLeaves = [];
    for (let leaf of leaves) {
      let leafValue = adjList.get(leaf)[0];
      const adj = adjList.get(leafValue);
      adj.splice(adj.indexOf(leaf), 1);
      if (adjList.get(leafValue).length === 1) {
        newLeaves.push(leafValue);
      }
      adjList.set(leaf, []);
    }
    leaves = newLeaves;
  }

  return leaves;
};

const getLeaves = adjList => {
  const leaves = [];
  for (let i = 0; i < adjList.size; i++) {
    if (adjList.get(i).length === 1) {
      leaves.push(i);
    }
  }
  return leaves;
};

const getAdjacencyList = (n, edges) => {
  const adjList = new Map();
  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }
  edges.map(edge => {
    adjList.get(edge[0]).push(edge[1]);
    adjList.get(edge[1]).push(edge[0]);
  });
  return adjList;
};

console.log(findMinHeightTrees(6, [[0, 1], [0, 2], [0, 3], [3, 4], [4, 5]]));
