function hanoi(posts) {
    const n = posts.reduce((acc, rod) => acc + rod.length, 0);

    let start = 0;
    for (let i = 0; i < 4; i++) {
        for (const disk of posts[i]) {
            start |= i << (2 * (disk - 1));
        }
    }

   
    const goalStates = [0, 1, 2, 3].map(r => {
        let state = 0;
        for (let i = 0; i < n; i++) {
            state |= r << (2 * i);
        }
        return state;
    });

    const visited = new Set();
    const queue = [[start, 0]];

    while (queue.length) {
        const [state, moves] = queue.shift();
        if (goalStates.includes(state)) return moves;
        if (visited.has(state)) continue;
        visited.add(state);

        const tops = Array(4).fill(null);
        for (let i = n - 1; i >= 0; i--) {
            const rod = (state >> (2 * i)) & 3;
            if (tops[rod] === null) tops[rod] = i;
        }

        for (let from = 0; from < 4; from++) {
            if (tops[from] === null) continue;
            for (let to = 0; to < 4; to++) {
                if (from === to) continue;
                if (tops[to] === null || tops[from] < tops[to]) {
                    const disk = tops[from];
                    const mask = 3 << (2 * disk);
                    const newState = (state & ~mask) | (to << (2 * disk));
                    queue.push([newState, moves + 1]);
                }
            }
        }
    }

    return -1;
}