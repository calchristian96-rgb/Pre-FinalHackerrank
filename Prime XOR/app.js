function primeXor(arr) {
    const MOD = 1e9 + 7;
    const MAX_XOR = 8192;
    const isPrime = Array(MAX_XOR).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i < MAX_XOR; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < MAX_XOR; j += i) {
                isPrime[j] = false;
            }
        }
    }
    const freq = {};
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }


    let dp = Array(MAX_XOR).fill(0);
    dp[0] = 1;

    for (const [valStr, count] of Object.entries(freq)) {
        const val = parseInt(valStr);
        const newDp = Array(MAX_XOR).fill(0);

        for (let x = 0; x < MAX_XOR; x++) {
            const evenWays = (dp[x] * ((count >> 1) + 1)) % MOD;
            const oddWays = (dp[x ^ val] * ((count + 1) >> 1)) % MOD;
            newDp[x] = (evenWays + oddWays) % MOD;
        }

        dp = newDp;
    }

  
    let result = 0;
    for (let i = 0; i < MAX_XOR; i++) {
        if (isPrime[i]) {
            result = (result + dp[i]) % MOD;
        }
    }

    return result;
}