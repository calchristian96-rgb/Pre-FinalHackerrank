function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) return false;

    if (rank[rootX] < rank[rootY]) parent[rootX] = rootY;
    else if (rank[rootX] > rank[rootY]) parent[rootY] = rootX;
    else {
      parent[rootY] = rootX;
      rank[rootX]++;
    }
    return true;
  }

function kruskalMST(n, edgeList) {
  let mstWeight = 0;
  let edgesUsed = 0;

  for (const { u, v, w } of edges) {
    if (union(u, v)) {
      mstWeight += w;
      edgesUsed++;
      if (edgesUsed === n - 1) break;
    }
  }

  return mstWeight;
}
