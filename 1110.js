const input = Number(require('fs').readFileSync('./dev/stdin').toString().trim().split('/n'));

let count = 0;
let num = input
let sum;

while(true){
    sum = Math.floor(num/10) + num%10;
    num = (num%10)*10 + sum%10;
    count++
    
if(num === input) break;
}

console.log(count);