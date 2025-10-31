function simpleGame(N, M, K) {
    let count = 0;
    const partitions = generateInitialPartitions(N, M);

    for (const piles of partitions) {
        let xor = 0;
        for (const pile of piles) {
            xor ^= getGrundy(pile, K);
        }
        if (xor !== 0) count++;
    }

    return count;
}