function boardCutting(cost_y, cost_x) {
    const MOD = 1e9 + 7;
    cost_y.sort((a, b) => b - a);
    cost_x.sort((a, b) => b - a);

    let total = 0;
    let horizontalPieces = 1;
    let verticalPieces = 1;

    let i = 0, j = 0;

    while (i < cost_y.length && j < cost_x.length) {
        if (cost_y[i] > cost_x[j]) {
            total = (total + cost_y[i] * verticalPieces) % MOD;
            horizontalPieces++;
            i++;
        } else {
            total = (total + cost_x[j] * horizontalPieces) % MOD;
            verticalPieces++;
            j++;
        }
    }

    while (i < cost_y.length) {
        total = (total + cost_y[i] * verticalPieces) % MOD;
        i++;
    }

    while (j < cost_x.length) {
        total = (total + cost_x[j] * horizontalPieces) % MOD;
        j++;
    }

    return total;
}
