function lilysHomework(arr) {
    function countSwaps(original, target) {
        const indexMap = new Map();
        for (let i = 0; i < original.length; i++) {
            indexMap.set(original[i], i);
        }

        let swaps = 0;
        for (let i = 0; i < original.length; i++) {
            if (original[i] !== target[i]) {
                swaps++;

                const correctValue = target[i];
                const toSwapIdx = indexMap.get(correctValue);

                
                indexMap.set(original[i], toSwapIdx);
                indexMap.set(correctValue, i);

              
                [original[i], original[toSwapIdx]] = [original[toSwapIdx], original[i]];
            }
        }

        return swaps;
    }

    const asc = [...arr].sort((a, b) => a - b);
    const desc = [...arr].sort((a, b) => b - a);

    return Math.min(countSwaps([...arr], asc), countSwaps([...arr], desc));
}