const input = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ')

let test = input

let arr = test.map(v=>{return Number(v)})

let max = arr[0];
let min = arr[0];
console.log(min);
for(let a=1; a<arr.length; a++){
    if(max < arr[a]) max = arr[a];
    if(min > arr[a]) min = arr[a];
}

console.log(`${min} ${max}`);

