function counterGame(n) {
    n = BigInt(n);
    let moves = 0;

    while (n > 1n) {
        if ((n & (n - 1n)) === 0n) {
            n >>= 1n;
        } else {
            let power = 1n;
            while (power << 1n <= n) power <<= 1n;
            n -= power;
        }
        moves++;
    }

    return moves % 2 === 1 ? "Louise" : "Richard";
}
