const input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");

for (let a = 1; a <= Number(input[0]); a++) {
  let temp = input[a].split("");
  let num = 0;
  let answer = 0;
  temp.filter((v) => {
    if (v == "O") {
        num++
    } else {
        num = 0;
    }
    answer += num;
  });
  console.log(answer);
}
