function maxSubarray(arr) {
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];
    let maxSubseq = arr[0] > 0 ? arr[0] : 0;

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        if (arr[i] > 0) maxSubseq += arr[i];
    }

    if (maxSubseq === 0) maxSubseq = Math.max(...arr);
    return [maxSoFar, maxSubseq];
}