function maxMin(k, arr) {
    const n = arr.length;

    arr.sort((a, b) => a - b);

    let minUnfairness = Infinity;

    for (let i = 0; i <= n - k; i++) {
        const maxElement = arr[i + k - 1];
        const minElement = arr[i];
        const currentUnfairness = maxElement - minElement;
        minUnfairness = Math.min(minUnfairness, currentUnfairness);
    }

    return minUnfairness;
}
