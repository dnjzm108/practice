let arr = [];
function test(n) {
  let sum = n;

  while (true) {
    if (n == 0) break;
    sum += n % 10;
    n = parseInt(n / 10);
  }
  arr[sum] = sum;
  return sum;
}

for (let i = 1; i <= 10000; i++) {
  test(i);
  if (arr[i] === undefined) {
    console.log(i);
  }
}

