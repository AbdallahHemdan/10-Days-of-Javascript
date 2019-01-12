'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getSecondLargest(nums) {
  let max1 = -1;
  let max2 = -1;
  for (const e of nums) {
    if (e > max1) {
      max2 = max1;
      max1 = e;
    } else if (e > max2 && e != max1)
      max2 = e;
  }
  return max2;
}


function main() {
  const n = +(readLine());
  const nums = readLine().split(' ').map(Number);

  console.log(getSecondLargest(nums));
}
