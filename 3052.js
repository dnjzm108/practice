const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
let arr = [1,2];
for (let a = 0; a < input.length; a++) {
  let temp = arr.push(input[a] % 42);
}
let test = [...new Set(arr)];
console.log(test.length);

