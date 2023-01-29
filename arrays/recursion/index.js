console.log("heelo")
function countWays(n, memo={}){
  
   
      if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else if (n in memo) {
    return memo[n];
  } else {
    memo[n] = countWays(n - 1, memo) + countWays(n - 2, memo) + countWays(n - 3, memo);
    return memo[n];
  }
}
   let ans= countWays(3);
   console.log(ans);