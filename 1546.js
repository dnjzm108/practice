const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n')

let count = input[0]
let Num = input[1].split(' ')
let max = Math.max(...Num);

let sum = 0;
for(let a =0; a < count; a++){
    sum += Num[a] / max *100;
}
console.log(sum/count);