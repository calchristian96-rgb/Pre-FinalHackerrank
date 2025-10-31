function reverseShuffleMerge(s) {
    const freq = {};
    const used = {};
    const required = {};
    const result = [];

    for (const c of s) {
        freq[c] = (freq[c] || 0) + 1;
    }

    for (const c in freq) {
        required[c] = Math.floor(freq[c] / 2);
        used[c] = 0;
    }

    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];
        freq[c]--;

        if (used[c] < required[c]) {
            while (
                result.length > 0 &&
                result[result.length - 1] > c &&
                used[result[result.length - 1]] + freq[result[result.length - 1]] > required[result[result.length - 1]]
            ) {
                const removed = result.pop();
                used[removed]--;
            }
            result.push(c);
            used[c]++;
        }
    }

    return result.join('');
}
