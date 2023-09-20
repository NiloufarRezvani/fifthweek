const secondsInput = prompt("write secends:");

function formatTime(seconds) {
  if (seconds === 0) {
    console.log(`0 seconds`);
  }

  const times = {
    years: 31536000,
    month: 2592000,
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };
  const arrayoftime = Object.entries(times)
  console.log(arrayoftime)

  const arrayOfStr = [];
  for (const [key, value] of arrayoftime) {
    if (seconds >= value) {
      const count = Math.floor(seconds / value);
      seconds -= count * value;
      arrayOfStr.push(`${count} ${key}${count} `)
      console.log(arrayOfStr);
    }
  }
  const newStr = arrayOfStr.join(", ");
  console.log(newStr)
  const lastComma = newStr.lastIndexOf(", ");
  if (lastComma !== -1) {
    const beforComma = newStr.slice(0, lastComma);
    const afterComma = newStr.slice(lastComma + 2);
    return `${beforComma} and ${afterComma}`;
  }
  return newStr;

}

console.log(formatTime(secondsInput))