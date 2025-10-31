function equal(arr) {
    const min = Math.min(...arr);
    let result = Infinity;

    for (let base = 0; base <= 5; base++) {
        let operations = 0;
        for (let val of arr) {
            let delta = val - (min - base);
            operations += Math.floor(delta / 5);
            delta %= 5;
            operations += Math.floor(delta / 2);
            delta %= 2;
            operations += delta;
        }
        result = Math.min(result, operatiqons);
    }

    return result;
}
