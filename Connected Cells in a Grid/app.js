function connectedCellInGrid(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxRegion = 0;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function dfs(r, c) {
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            visited[r][c] ||
            matrix[r][c] === 0
        ) return 0;

        visited[r][c] = true;
        let size = 1;

        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr !== 0 || dc !== 0) {
                    size += dfs(r + dr, c + dc);
                }
            }
        }

        return size;function connectedCell(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    let maxRegion = 0;

    function dfs(r, c) {
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            visited[r][c] ||
            matrix[r][c] === 0
        ) return 0;

        visited[r][c] = true;
        let size = 1;

        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr !== 0 || dc !== 0) {
                    size += dfs(r + dr, c + dc);
                }
            }
        }

        return size;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (!visited[r][c] && matrix[r][c] === 1) {
                maxRegion = Math.max(maxRegion, dfs(r, c));
            }
        }
    }

    return maxRegion;
}


    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (!visited[r][c] && matrix[r][c] === 1) {
                maxRegion = Math.max(maxRegion, dfs(r, c));
            }
        }
    }

    return maxRegion;
}

