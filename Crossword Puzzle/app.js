function crosswordPuzzle(crossword, wordsStr) {
    const grid = crossword.map(row => row.split(''));
    const words = wordsStr.split(';');

    function canPlaceHorizontally(word, r, c) {
        if (c + word.length > 10) return false;
        for (let i = 0; i < word.length; i++) {
            if (grid[r][c + i] !== '-' && grid[r][c + i] !== word[i]) return false;
        }
        return true;
    }

    function placeHorizontally(word, r, c) {
        const positions = [];
        for (let i = 0; i < word.length; i++) {
            if (grid[r][c + i] === '-') {
                grid[r][c + i] = word[i];
                positions.push(i);
            }
        }
        return positions;
    }

    function removeHorizontally(positions, r, c) {
        for (let i of positions) {
            grid[r][c + i] = '-';
        }
    }

    function canPlaceVertically(word, r, c) {
        if (r + word.length > 10) return false;
        for (let i = 0; i < word.length; i++) {
            if (grid[r + i][c] !== '-' && grid[r + i][c] !== word[i]) return false;
        }
        return true;
    }

    function placeVertically(word, r, c) {
        const positions = [];
        for (let i = 0; i < word.length; i++) {
            if (grid[r + i][c] === '-') {
                grid[r + i][c] = word[i];
                positions.push(i);
            }
        }
        return positions;
    }

    function removeVertically(positions, r, c) {
        for (let i of positions) {
            grid[r + i][c] = '-';
        }
    }

    function solve(index) {
        if (index === words.length) return true; 

        const word = words[index];

        for (let r = 0; r < 10; r++) {
            for (let c = 0; c < 10; c++) {
                if (canPlaceHorizontally(word, r, c)) {
                    const positions = placeHorizontally(word, r, c);
                    if (solve(index + 1)) return true;
                    removeHorizontally(positions, r, c);
                }
                if (canPlaceVertically(word, r, c)) {
                    const positions = placeVertically(word, r, c);
                    if (solve(index + 1)) return true;
                    removeVertically(positions, r, c);
                }
            }
        }

        return false; 
    }

    solve(0);
    return grid.map(row => row.join(''));
}
