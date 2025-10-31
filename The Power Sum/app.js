function powerSum(X, N) {
    function helper(target, num) {
        const power = Math.pow(num, N);
        if (power > target) return 0;
        if (power === target) return 1; 

        return helper(target - power, num + 1) + helper(target, num + 1);
    }
    
    return helper(X, 1);
}
