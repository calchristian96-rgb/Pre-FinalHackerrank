function andProduct(a, b) {
    a = BigInt(a);
    b = BigInt(b);
    let shift = 0n;

    while (a < b) {
        a >>= 1n;
        b >>= 1n;
        shift += 1n;
    }

    return a << shift;
}
