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
function performOperation(secondInteger, secondDecimal, secondString) {
    const FirstNumInt = 4; 
    const FirstNumDeci = 4.0; 
    const FirstName = 'HackerRank '; 
    console.log(FirstNumInt + Number(secondInteger)); 
    console.log(FirstNumDeci + Number(secondDecimal));
    console.log(FirstName.concat(secondString));
}


function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}
