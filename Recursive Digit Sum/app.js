function superDigit(n, k) {
    function digitSum(x) {
        if (x < 10) return x;
        let sum = 0;
        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }
        return digitSum(sum);
    }

    
    let sum = 0;
    for (let ch of n) {
        sum += Number(ch);
    }

    
    return digitSum(sum * k);
}
