function toys(w) {
    w.sort((a, b) => a - b);
    let containers = 0;
    let i = 0;
    const n = w.length;

    while (i < n) {
        let limit = w[i] + 4;
        containers++;
        i++;
        while (i < n && w[i] <= limit) {
            i++;
        }
    }

    return containers;
}