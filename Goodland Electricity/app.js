function pylons(k, arr) {
    const n = arr.length;
    let count = 0;
    let i = 0;

    while (i < n) {
        let placed = false;
        const rightMost = Math.min(i + k - 1, n - 1);
        let j = rightMost;

        while (j >= Math.max(i - k + 1, 0)) {
            if (arr[j] === 1) {
                count++;
                i = j + k;
                placed = true;
                break;
            }
            j--;
        }

        if (!placed) return -1;
    }

    return count;
}
