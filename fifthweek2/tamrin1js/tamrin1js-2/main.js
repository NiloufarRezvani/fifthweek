const numberInput = prompt('write your ISBN:');

function isbn(ISBN) {
  
  const length = ISBN.length;
  console.log(length);
  if (length !== 10) {
    alert("unvalid number");
  }
  else if (length === 10) {

    const arrISBN = ISBN.split("");
    console.log(arrISBN)
    const lastIndex = arrISBN[9]
    
    const splitedarray = arrISBN.map((value, index) => {
      const final = value * (index + 1);
      return final
    })
    console.log(splitedarray)
    if(lastIndex==="X"){
      splitedarray[9] =100
      const sum = splitedarray.reduce((acc, next) => acc + next, 0)
      if(sum % 11 ===0){
        return true
      }
      else{
        false
      }
    }
    else {
      const sum = splitedarray.reduce((acc, next) => acc + next, 0)
      if(sum % 11 ===0){
        return true
      }
      else{
        return false
      }
    }
    
    
   
  }
}
console.log(isbn(numberInput))