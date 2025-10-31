function gamingArray(arr) {
    let maxSoFar = -Infinity;
    let moves = 0;

    for (const num of arr) {
        if (num > maxSoFar) {
            maxSoFar = num;
            moves++;
        }
    }

    return moves % 2 === 1 ? "BOB" : "ANDY";
}