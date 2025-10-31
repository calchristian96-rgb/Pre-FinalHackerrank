function candies(n, arr) {
    const candiesArr = new Array(n).fill(1);

   
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            candiesArr[i] = candiesArr[i - 1] + 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            candiesArr[i] = Math.max(candiesArr[i], candiesArr[i + 1] + 1);
        }
    }

   
    return candiesArr.reduce((sum, c) => sum + c, 0);
}
