function evenForest(t_nodes, t_edges, t_from, t_to) {

  const adj = Array.from({ length: t_nodes + 1 }, () => []);

  for (let i = 0; i < t_edges; i++) {
    adj[t_from[i]].push(t_to[i]);
    adj[t_to[i]].push(t_from[i]);
  }

  let removableEdges = 0;

  function dfs(node, parent) {
    let size = 1;
    for (const child of adj[node]) {
      if (child !== parent) {
        const subtreeSize = dfs(child, node);
        if (subtreeSize % 2 === 0) {
          removableEdges++;
        } else {
          size += subtreeSize;
        }
      }
    }
    return size;
  }

  dfs(1, -1);
  return removableEdges;
}
