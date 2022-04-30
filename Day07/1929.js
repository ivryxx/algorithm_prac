let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = Number(inputs[0]);
let b = Number(inputs[1]);
let arr = [];
let answer = "";
for (let i = 0; i <= b; i++) {
  arr.push(true);
}
arr[0] = false;
arr[1] = false;

for (let m = 2; m <= b; m++) {
  if (arr[m]) {
    for (var n = 2; n <= b / m; n++) {
      arr[m * n] = false;
    }
  }
}
for (var j = a; j <= b; j++) {
  if (arr[j]) answer += j + "\n";
}
console.log(answer.trim());
