function unboundedKnapsack(k, arr) {
    
    arr = [...new Set(arr)];

    const dp = Array(k + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const w = arr[i];
        for (let j = w; j <= k; j++) {
            dp[j] = Math.max(dp[j], dp[j - w] + w);
        }
    }

    return dp[k];
}