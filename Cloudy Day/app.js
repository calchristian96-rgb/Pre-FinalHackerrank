function maximumPeople(p, x, y, r) {
    const n = p.length;
    const m = r.length;

    const coveredCount = new Array(n).fill(0);
    const cloudSingle = new Array(m).fill(0);

    for (let i = 0; i < n; i++) {
        let coveredBy = [];
        for (let j = 0; j < m; j++) {
            const dx = x[i] - r[j]; // Incorrect before
            const dy = y[i] - y[j];
            if ((x[i] - x[j]) ** 2 + (y[i] - y[j]) ** 2 <= r[j] ** 2) {
                coveredCount[i]++;
                coveredBy.push(j);
            }
        }
        if (coveredBy.length === 1) {
            cloudSingle[coveredBy[0]] += p[i];
        }
    }

    let sunnyPopulation = 0;
    for (let i = 0; i < n; i++) {
        if (coveredCount[i] === 0) sunnyPopulation += p[i];
    }

    const maxAdditional = Math.max(...cloudSingle);

    return sunnyPopulation + maxAdditional;
}
