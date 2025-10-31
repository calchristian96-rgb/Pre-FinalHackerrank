function shortestReach(n, edges, s) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of edges) {
        graph[u].push({ node: v, weight: w });
        graph[v].push({ node: u, weight: w }); 
    }

    const distances = Array(n + 1).fill(Infinity);
    distances[s] = 0;

    const visited = Array(n + 1).fill(false);
    const pq = new MinPriorityQueue({ priority: x => x.distance });
    pq.enqueue({ node: s, distance: 0 });

    while (!pq.isEmpty()) {
        const { node: u } = pq.dequeue().element;
        if (visited[u]) continue;
        visited[u] = true;

        for (const { node: v, weight: w } of graph[u]) {
            if (!visited[v] && distances[u] + w < distances[v]) {
                distances[v] = distances[u] + w;
                pq.enqueue({ node: v, distance: distances[v] });
            }
        }
    }

    return distances
        .slice(1)
        .map((d, i) => (i + 1 === s ? null : d === Infinity ? -1 : d))
        .filter(d => d !== null);
}