function coinOnTheTable(m, k, board) {
    const n = board.length;
    const cols = board[0].length;
    let targetRow = -1, targetCol = -1;

 
    for (let i = 0; i < n; i++) {
        const j = board[i].indexOf('*');
        if (j !== -1) {
            targetRow = i;
            targetCol = j;
            break;
        }
    }


   
    const dirMap = { 'U': [-1, 0], 'D': [1, 0], 'L': [0, -1], 'R': [0, 1] };
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const INF = 1e9;

  
    const dp = Array.from({ length: n }, () => 
        Array.from({ length: cols }, () => Array(k + 1).fill(INF))
    );

    dp[0][0][0] = 0;

    for (let t = 0; t < k; t++) {
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < cols; c++) {
                if (dp[r][c][t] === INF) continue;

                for (let [dr, dc] of moves) {
                    const nr = r + dr, nc = c + dc;
                    if (nr < 0 || nc < 0 || nr >= n || nc >= cols) continue;

                    let cost = 0;
                    const moveChar = Object.keys(dirMap).find(d =>
                        dirMap[d][0] === dr && dirMap[d][1] === dc
                    );
                    if (board[r][c] !== moveChar) cost = 1;

                    dp[nr][nc][t + 1] = Math.min(dp[nr][nc][t + 1], dp[r][c][t] + cost);
                }
            }
        }
    }

    let ans = INF;
    for (let t = 0; t <= k; t++) {
        ans = Math.min(ans, dp[targetRow][targetCol][t]);
    }

    return ans === INF ? -1 : ans;
}