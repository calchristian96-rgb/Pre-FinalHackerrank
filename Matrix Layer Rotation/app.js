function matrixRotation(matrix, r) {
    const m = matrix.length;
    const n = matrix[0].length;
    const layers = Math.min(m, n) / 2;

    for (let layer = 0; layer < layers; layer++) {
        const elements = [];

        for (let i = layer; i < n - layer; i++) elements.push(matrix[layer][i]);
        for (let i = layer + 1; i < m - layer - 1; i++) elements.push(matrix[i][n - layer - 1]);
        for (let i = n - layer - 1; i >= layer; i--) elements.push(matrix[m - layer - 1][i]);
        for (let i = m - layer - 2; i > layer; i--) elements.push(matrix[i][layer]);

       
        const len = elements.length;
        const rotated = elements.slice(r % len).concat(elements.slice(0, r % len));

     
        let idx = 0;
        for (let i = layer; i < n - layer; i++) matrix[layer][i] = rotated[idx++];
        for (let i = layer + 1; i < m - layer - 1; i++) matrix[i][n - layer - 1] = rotated[idx++];
        for (let i = n - layer - 1; i >= layer; i--) matrix[m - layer - 1][i] = rotated[idx++];
        for (let i = m - layer - 2; i > layer; i--) matrix[i][layer] = rotated[idx++];
    }

    matrix.forEach(row => console.log(row.join(' ')));
}