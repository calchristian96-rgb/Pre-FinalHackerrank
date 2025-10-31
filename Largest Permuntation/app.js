function largestPermutation(k, arr) {
    const n = arr.length;
    const indexMap = new Map();
    
    for (let i = 0; i < n; i++) {
        indexMap.set(arr[i], i);
    }

    for (let i = 0; i < n && k > 0; i++) {
        const desired = n - i;
        if (arr[i] === desired) continue;

        const swapIdx = indexMap.get(desired);

        [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];

        indexMap.set(arr[swapIdx], swapIdx);
        indexMap.set(arr[i], i);

        k--;
    }

    return arr;
}
