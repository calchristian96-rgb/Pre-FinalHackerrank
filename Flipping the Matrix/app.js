function flippingMatrix(matrix) {
    const n2 = matrix.length;        // 2n
    const n = n2 / 2;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const topLeft = matrix[i][j];
            const topRight = matrix[i][n2 - j - 1];
            const bottomLeft = matrix[n2 - i - 1][j];
            const bottomRight = matrix[n2 - i - 1][n2 - j - 1];

            sum += Math.max(topLeft, topRight, bottomLeft, bottomRight);
        }
    }

    return sum;
}
