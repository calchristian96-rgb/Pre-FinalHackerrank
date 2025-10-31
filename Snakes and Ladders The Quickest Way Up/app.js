function quickestWayUp(ladders, snakes) {
    const board = Array(101).fill(0).map((_, i) => i);

 
    for (const [start, end] of ladders) {
        board[start] = end;
    }


    for (const [start, end] of snakes) {
        board[start] = end;
    }

    const visited = Array(101).fill(false);
    const queue = [[1, 0]]; 

    while (queue.length > 0) {
        const [pos, moves] = queue.shift();

        if (pos === 100) return moves;
        if (visited[pos]) continue;
        visited[pos] = true;

        for (let roll = 1; roll <= 6; roll++) {
            const next = pos + roll;
            if (next <= 100 && !visited[board[next]]) {
                queue.push([board[next], moves + 1]);
            }
        }
    }

    return -1; 
}