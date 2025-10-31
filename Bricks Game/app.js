function bricksGame(arr) {
    const n = arr.length;
    const dp = Array(n + 1).fill(0);
    const suffixSum = Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + arr[i];
    }

    dp[n] = 0;
    dp[n - 1] = arr[n - 1];
    if (n > 1) dp[n - 2] = arr[n - 2] + arr[n - 1];
    if (n > 2) dp[n - 3] = arr[n - 3] + arr[n - 2] + arr[n - 1];

    for (let i = n - 4; i >= 0; i--) {
        const take1 = suffixSum[i] - dp[i + 1];
        const take2 = suffixSum[i] - dp[i + 2];
        const take3 = suffixSum[i] - dp[i + 3];
        dp[i] = Math.max(take1, take2, take3);
    }

    return dp[0];
}