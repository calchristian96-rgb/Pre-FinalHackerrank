function shop(n, k, centers, roads) {
  const INF = 1e9;
  const allFishMask = (1 << k) - 1;

  const fishMasks = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const fishList = centers[i].split(' ').map(Number).slice(1);
    for (const f of fishList) fishMasks[i + 1] |= 1 << (f - 1);
  }

  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, t] of roads) {
    adj[u].push([v, t]);
    adj[v].push([u, t]);
  }

  const dist = Array.from({ length: n + 1 }, () => Array(1 << k).fill(INF));
  const heap = new MinHeap();
  dist[1][fishMasks[1]] = 0;
  heap.push([0, 1, fishMasks[1]]);

  while (heap.size) {
    const [time, u, mask] = heap.pop();
    if (time > dist[u][mask]) continue;
    for (const [v, t] of adj[u]) {
      const newMask = mask | fishMasks[v];
      const newTime = time + t;
      if (newTime < dist[v][newMask]) {
        dist[v][newMask] = newTime;
        heap.push([newTime, v, newMask]);
      }
    }
  }

  let res = INF;
  for (let i = 0; i <= allFishMask; i++) {
    for (let j = 0; j <= allFishMask; j++) {
      if ((i | j) === allFishMask) {
        res = Math.min(res, Math.max(dist[n][i], dist[n][j]));
      }
    }
  }
  return res;
}
