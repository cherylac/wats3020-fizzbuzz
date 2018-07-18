/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;



isInteger = false;

while (!isInteger ) {
    
    // Inside `while` loop prompt the user for the `maxNumber` value.
    maxNumber = prompt('Please enter a number greater than zero (must be an integer):', 20);
    // Conditional to verify if the `maxNumber`
    // is a suitable integer. (It should be an integer greater than zero.)
    maxNumber = parseInt(maxNumber);
    if (Number.isSafeInteger(maxNumber) && maxNumber > 0){
        isInteger = true;
    } else { alert('Must be greater than 0')
    }
    
}


fbResults = [];

for (let i=1; i <= maxNumber; i++) {
    if (i % 15 == 0) {
    fbResults.push('FizzBuzz');
} else if (i % 3 == 0) {
    fbResults.push('Fizz');
} else if (i % 5 == 0) {
    fbResults.push('Buzz');
} else {
    fbResults.push(i);
}

}


fbText = '';

for (let result of fbResults) {
    fbText = fbText + result + "\n";
}


///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
