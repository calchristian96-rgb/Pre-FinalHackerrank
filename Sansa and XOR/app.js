function sansaXor(arr) {
    const n = arr.length;
    if (n % 2 === 0) return 0;

    let xor = 0;
    for (let i = 0; i < n; i += 2) {
        xor ^= arr[i];
    }
    return xor;
}
