function prims(n, edges, start) {
    
    const adj = Array.from({ length: n + 1 }, () => []);
    for (let [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    const visited = new Array(n + 1).fill(false);
    let totalWeight = 0;


    const heap = [];
    heap.push([0, start]);

    while (heap.length > 0) {
     
        heap.sort((a, b) => a[0] - b[0]);
        const [w, u] = heap.shift();

        if (visited[u]) continue;
        visited[u] = true;
        totalWeight += w;

        for (let [v, weight] of adj[u]) {
            if (!visited[v]) heap.push([weight, v]);
        }
    }

    return totalWeight;
}
