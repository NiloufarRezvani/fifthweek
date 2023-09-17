const userInput  = prompt('write your words with numbers')


function makeSortedStr(Str) {
    
    const words = Str.split(' ');
    console.log(words)

    
    function sortedStr(a, b) {
        const numA = +(a.match(/[0-9]/)); 
        
        const numB = +(b.match(/[0-9]/)); 
        
        return numA - numB;
    }

    
    const sortedWords = words.sort(sortedStr);

    
    const result = sortedWords.join(' ');

    return result;
}
  console.log(makeSortedStr(userInput))
  
