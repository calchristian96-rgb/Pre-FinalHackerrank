function morganAndString(a, b) {
    let i = 0, j = 0;
    const result = [];

    while (i < a.length || j < b.length) {
        if (i === a.length) {
            result.push(b[j++]);
        } else if (j === b.length) {
            result.push(a[i++]);
        } else {
            
            const suffixA = a.slice(i);
            const suffixB = b.slice(j);
            if (suffixA <= suffixB) {
                result.push(a[i++]);
            } else {
                result.push(b[j++]);
            }
        }
    }

    return result.join('');
}