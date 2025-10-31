function getMinimumCost(k, c) {
    c.sort((a, b) => b - a);

    let minimumCost = 0;
    const n = c.length;

    for (let i = 0; i < n; i++) {
        const multiplier = 1 + Math.floor(i / k);
        minimumCost += c[i] * multiplier;
    }

    return minimumCost;
}