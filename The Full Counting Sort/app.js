function countSort(arr) {
    const n = arr.length;
    const buckets = {};
    
    for (let i = 0; i < n; i++) {
        const [numStr, str] = arr[i];
        const num = parseInt(numStr);
        if (!buckets[num]) buckets[num] = [];
        buckets[num].push(i < n / 2 ? '-' : str);
    }

    const output = [];
    Object.keys(buckets).sort((a, b) => a - b).forEach(key => {
        output.push(...buckets[key]);
    });

    console.log(output.join(' '));
}