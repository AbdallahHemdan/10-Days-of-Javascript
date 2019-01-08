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

function main() {

  const PI = Math.PI;
  let r = readLine();
  console.log(PI * r * r);
  console.log(2 * PI * r);

  try {
    PI = 0;
    console.log(PI);
  } catch(error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
