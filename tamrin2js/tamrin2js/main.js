const inputSecends = prompt('write secends:')

function setTime(seconds) {
    if (seconds < 0 || seconds > 359999) {
        return "00:00:00";  
    }

    const hours = Math.floor(seconds / 3600);
    
    const minutes = Math.floor((seconds % 3600) / 60);
    
    const finalseconds = seconds % 60;
    

    const newHours = String(hours).padStart(2, '0');
    const newMinutes = String(minutes).padStart(2, '0');
    const newSeconds = String(finalseconds).padStart(2, '0');

    return `${newHours}:${newMinutes}:${newSeconds}`;
}
console.log(setTime(inputSecends))



