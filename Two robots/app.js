function twoRobots(m, queries) {
    const n = queries.length;
    const dp = Array.from({ length: n + 1 }, () => new Map());
    dp[0].set(-1, 0); 

    for (let i = 0; i < n; i++) {
        const [a, b] = queries[i];
        for (const [pos2, cost] of dp[i].entries()) {
          
            let prev1 = i === 0 ? -1 : queries[i - 1][1];
            let move1 = prev1 === -1 ? 0 : Math.abs(prev1 - a);
            let newCost1 = cost + move1 + Math.abs(a - b);
            const key1 = pos2;
            if (!dp[i + 1].has(key1) || newCost1 < dp[i + 1].get(key1)) {
                dp[i + 1].set(key1, newCost1);
            }

           
            let prev2 = pos2;
            let move2 = prev2 === -1 ? 0 : Math.abs(prev2 - a);
            let newCost2 = cost + move2 + Math.abs(a - b);
            const key2 = i === 0 ? -1 : queries[i - 1][1];
            if (!dp[i + 1].has(key2) || newCost2 < dp[i + 1].get(key2)) {
                dp[i + 1].set(key2, newCost2);
            }
        }
    }

    let ans = Infinity;
    for (const val of dp[n].values()) ans = Math.min(ans, val);
    return ans;
}
