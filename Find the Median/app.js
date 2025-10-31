function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    const midIndex = Math.floor(n / 2);
    return arr[midIndex];
}
