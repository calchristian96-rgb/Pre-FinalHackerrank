function bfs(n, m, edges, s) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u); 
    }

    const visited = Array(n + 1).fill(false);
    const distance = Array(n + 1).fill(-1);
    const queue = [];

    visited[s] = true;
    distance[s] = 0;
    queue.push(s);

    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                distance[neighbor] = distance[node] + 6; 
                queue.push(neighbor);
            }
        }
    }

   
    return distance.slice(1).filter((_, idx) => idx + 1 !== s);
}