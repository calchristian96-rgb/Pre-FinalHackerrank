function minimumBribes(q) {
    let bribes = 0;

    for (let i = q.length - 1; i >= 0; i--) {
        const currentPos = i + 1;   
        const originalPos = q[i];

        if (originalPos - currentPos > 2) {
            console.log("Too chaotic");
            return;
        }

        for (let j = Math.max(0, originalPos - 2); j < i; j++) {
            if (q[j] > originalPos) {
                bribes++;
            }
        }
    }

    console.log(bribes);
}
