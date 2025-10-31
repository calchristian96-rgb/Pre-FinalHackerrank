function tutzkiAndLcs(a, b) {
    const m = a.length;
    const n = b.length;
    const chars = [];

    for (let i = 48; i <= 57; i++) chars.push(String.fromCharCode(i)); 
    for (let i = 65; i <= 90; i++) chars.push(String.fromCharCode(i)); 
    for (let i = 97; i <= 122; i++) chars.push(String.fromCharCode(i)); 

    const lcsPrefix = Array(m + 2).fill(null).map(() => Array(n + 2).fill(0));
    const lcsSuffix = Array(m + 2).fill(null).map(() => Array(n + 2).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1]) {
                lcsPrefix[i][j] = lcsPrefix[i - 1][j - 1] + 1;
            } else {
                lcsPrefix[i][j] = Math.max(lcsPrefix[i - 1][j], lcsPrefix[i][j - 1]);
            }
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (a[i] === b[j]) {
                lcsSuffix[i][j] = lcsSuffix[i + 1][j + 1] + 1;
            } else {
                lcsSuffix[i][j] = Math.max(lcsSuffix[i + 1][j], lcsSuffix[i][j + 1]);
            }
        }
    }

    const originalLCS = lcsPrefix[m][n];
    let count = 0;

    for (let pos = 0; pos <= m; pos++) {
        const used = new Set();
        for (let j = 0; j < n; j++) {
            const ch = b[j];
            if (!used.has(ch)) {
                const left = lcsPrefix[pos][j];
                const right = lcsSuffix[pos][j + 1];
                if (left + 1 + right === originalLCS + 1) {
                    count++;
                    used.add(ch);
                }
            }
        }
    }

    return count;
}