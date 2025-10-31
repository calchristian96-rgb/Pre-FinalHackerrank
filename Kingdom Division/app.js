function kingdomDivision(n, roads) {
    const MOD = 1000000007;
    const tree = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of roads) {
        tree[u].push(v);
        tree[v].push(u);
    }

    const dp = Array.from({ length: n + 1 }, () => [1, 1]);

    function dfs(node, parent) {
        let a = 1; 
        let b = 1;

        for (const child of tree[node]) {
            if (child === parent) continue;
            dfs(child, node);

            const [csame, cdiff] = dp[child];
            a = (a * (csame + cdiff)) % MOD;
            b = (b * csame) % MOD;
        }

        dp[node][0] = a % MOD;
        dp[node][1] = (a - b + MOD) % MOD;
    }

    dfs(1, -1);
    return (2 * dp[1][1]) % MOD;
}
