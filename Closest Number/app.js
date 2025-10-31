function closestNumbers(arr) {
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;
    const result = [];

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];
        if (diff === minDiff) {
            result.push(arr[i - 1], arr[i]);
        }
    }

    return result;
}