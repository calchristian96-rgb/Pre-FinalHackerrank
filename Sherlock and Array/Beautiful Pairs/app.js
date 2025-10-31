function beautifulPairs(A, B) {
    const freqB = new Map();
    for (const b of B) {
        freqB.set(b, (freqB.get(b) || 0) + 1);
    }

    let matches = 0;
    for (const a of A) {
        if (freqB.get(a) > 0) {
            matches++;
            freqB.set(a, freqB.get(a) - 1);
        }
    }

    if (matches < A.length) {
        return matches + 1;
    } else {
        return matches - 1;
    }
}
