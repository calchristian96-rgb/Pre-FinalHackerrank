function stockmax(prices) {
    let maxSoFar = 0;
    let profit = 0;

    for (let i = prices.length - 1; i >= 0; i--) {
        if (prices[i] > maxSoFar) {
            maxSoFar = prices[i];
        }
        profit += maxSoFar - prices[i];
    }

    return profit;
}
