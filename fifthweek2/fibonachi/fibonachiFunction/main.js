const numberInput = +prompt("write a number :")

function fibonachi(n) {
  let result = [];
  let a = 0;
  let b = 1;
  while (a < n) {
    result.push(a);
    const temp = a + b;
    a = b;
    b = temp;

  }
  return result;
}

console.log(fibonachi(numberInput));

