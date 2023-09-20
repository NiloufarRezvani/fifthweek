const inputArr = [];
while (true) {
  const inputStr = prompt('enter your number : ');

  if (inputStr === "quit") {
    break;
  }

  inputArr.push(+inputStr);

}

console.log(inputArr);

function maximumSum(arrayInput) {

  let sum = 0;
  let maxSum = 0;
  

  for (let i = 0; i < arrayInput.length; i++) {
    sum = Math.max(arrayInput[i], sum + arrayInput[i])
    maxSum = Math.max(maxSum, sum);

  }

return sum;

}

console.log(maximumSum(inputArr));