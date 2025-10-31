function countValidSubtrees(n, K, edges) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a - 1].push(b - 1);
        adj[b - 1].push(a - 1);
    }

    let total = 0;
    const visited = new Array(n).fill(false);
    const totalMasks = 1 << n;

    for (let mask = 0; mask < totalMasks; mask++) {
        if (mask === 0) {
            if (0 <= K) total++;
            continue;
        }

        let first = -1;
        for (let i = 0; i < n; i++) if (mask & (1 << i)) { first = i; break; }
        const stack = [first];
        visited.fill(false);
        visited[first] = true;
        let count = 1;

        while (stack.length) {
            const node = stack.pop();
            for (const nei of adj[node]) {
                if ((mask & (1 << nei)) && !visited[nei]) {
                    visited[nei] = true;
                    stack.push(nei);
                    count++;
                }
            }
        }

        const setSize = bitCount(mask);
        if (count !== setSize) continue;

        let boundaryEdges = 0;
        for (let u = 0; u < n; u++) {
            if (!(mask & (1 << u))) continue;
            for (const v of adj[u]) {
                if (!(mask & (1 << v))) boundaryEdges++;
            }
        }

        if (boundaryEdges <= K) total++;
    }

    return total;
}