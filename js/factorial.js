exports.factorial = function(num) {
    let answer= 1
    for (let i=1; i<=num; i++ ){
      answer *= i;
    }
  return answer;
}
