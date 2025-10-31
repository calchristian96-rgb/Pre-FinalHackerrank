function decibinaryNumbers(xBig) {
  let lo = 0, hi = MAX_DEC;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (prefix[mid] < xBig) lo = mid + 1;
    else hi = mid;
  }

  const target = lo;
  let remaining = xBig - (target > 0 ? prefix[target - 1] : 0n);
  let val = target;
  const digits = [];

  for (let p = MAX_POW; p >= 1; p--) {
    const pow2 = 1 << (p - 1);
    const prev = dp[p - 1];
    for (let d = 0; d <= 9; d++) {
      const prevVal = val - d * pow2;
      if (prevVal < 0) break;
      const ways = BigInt(Math.floor(prev[prevVal]));
      if (ways >= remaining) {
        digits.push(d);
        val = prevVal;
        break;
      }
      remaining -= ways;
    }
  }


  return digits.join('').replace(/^0+(?!$)/, '') || '0';
}
