function permutationGame(arr) {
    const memo = new Map();

    function isSorted(a) {
        for (let i = 1; i < a.length; i++) {
            if (a[i] < a[i - 1]) return false;
        }
        return true;
    }

    function key(a) {
        return a.join(',');
    }

    function canWin(a) {
        const k = key(a);
        if (memo.has(k)) return memo.get(k);

        if (isSorted(a)) {
            memo.set(k, false);
            return false;
        }

        for (let i = 0; i < a.length; i++) {
            const next = a.slice(0, i).concat(a.slice(i + 1));
            if (!canWin(next)) {
                memo.set(k, true);
                return true;
            }
        }

        memo.set(k, false);
        return false;
    }

    return canWin(arr) ? 'Alice' : 'Bob';
}