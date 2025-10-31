function fairCut(k, arr) {
    const n = arr.length;
    arr.sort((a, b) => a - b);

    const total = Array(n + 1).fill(0).map(() => Array(k + 1).fill(Infinity));
    total[0][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= Math.min(i, k); j++) {
            const a = arr[i - 1];

          
            if (j <= i - 1) {
                const unfair = total[i - 1][j] + a * j;
                total[i][j] = Math.min(total[i][j], unfair);
            }

          
            if (j > 0) {
                const unfair = total[i - 1][j - 1] + a * (i - j);
                total[i][j] = Math.min(total[i][j], unfair);
            }
        }
    }

    return total[n][k];
}