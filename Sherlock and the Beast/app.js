function decentNumber(n) {
    let numFives = n;
    while (numFives % 3 !== 0) {
        numFives -= 5;
    }

    if (numFives < 0) {
        console.log(-1);
    } else {
        const numThrees = n - numFives;
        console.log('5'.repeat(numFives) + '3'.repeat(numThrees));
    }
}
