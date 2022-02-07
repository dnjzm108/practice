const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// for (let i = 1; i <= +input[0]; i++) {
//   const arr = input[i].split(" ").map((v) => +v);
//   const n = arr.shift();
//   // console.log(n);

//   const mean = arr.reduce((acc, cur) => acc + cur) / n;

//   const cnt = arr.filter((v) => v > mean).length;

//   console.log(`${((cnt / n) * 100).toFixed(3)}%`);
// }

// for (let a = 1; a <= Number(input[0]); a++) {
//   let temp = input[a].split(" ");
//   let num = 0;
//   for (let b = 1; b <= Number(input[a][0]); b++) {
//     num += Number(temp[b]);
//   }
//   let avg = num / Number(temp[0]);
//   let avgNum = 0;
//   for (let c = 1; c <= Number(input[a][0]); c++) {
//     if (avg < Number(temp[c])) {
//       avgNum++;
//     }
//   }
//   console.log(((100 / Number(input[a][0])) * avgNum).toFixed(3)+"%");
// }


// for(let a=1; a <input[0]; a++){
//     let temp = input[a].split(' ').map(v=>+v);
//     let min = temp.shift()
  
//     let mean = temp.reduce((acc,cur)=>acc+cur)
//     console.log(mean);
//     let cnt = temp.filter((v)=>v>mean).length;
//     console.log(cnt);
//     console.log(`${((cnt/min)*100).toFixed(3)}%`);
// }

for(let a=1; a<input[0];a++){
    let temp = input[a].split(' ').map(v=>v);
    let min = temp.shift()

    let mean = temp.reduce((acc,cur)=>acc+cur)
    console.log(mean);
    let cnt = temp.filter((v)=>v>mean).length;

    // console.log(`${(((cnt/min)*100).toFixed(3))}`);
}