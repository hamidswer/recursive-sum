function recursive_sum(n) {
  let rec_sum = 0;
  if (n == 1) {
    rec_sum = 1;
  } else {
    rec_sum = n + recursive_sum(n - 1);
  }
  return rec_sum;
}

console.log(recursive_sum(4));
// 4+3+2+1 = 10
