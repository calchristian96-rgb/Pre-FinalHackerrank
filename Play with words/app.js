function playWithWords(s) {
    const n = s.length;

   
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

  
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    
    let maxProduct = 0;
    for (let i = 0; i < n - 1; i++) {
        const left = dp[0][i];
        const right = dp[i + 1][n - 1];
        maxProduct = Math.max(maxProduct, left * right);
    }

    return maxProduct;
}
