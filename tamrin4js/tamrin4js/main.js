const inputUser = prompt("write a string:")
function incrementString(s) {
    const match = s.match(/(\D+)(\d*)$/);
    console.log(match)

    if (match) {
        const textPart = match[1];
        const numberPart = match[2];
        console.log(numberPart)

        if (numberPart) {
            
            const newNumbwrPart = (+numberPart + 1).toString().padStart(numberPart.length, '0');
            return textPart + newNumbwrPart;
        }
        else {
            return s + '1';
        }
    }
}

console.log(incrementString(inputUser))

