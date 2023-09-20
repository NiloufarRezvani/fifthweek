const strInput = prompt("write your string:");
const markersInput = prompt('write your markers:');

function changeStr(inputString, markers) {
  const markersarray = markers.split(' ')
  console.log(markersarray)
  
  const lines = inputString.split('.');
  console.log(lines);
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    console.log(line)
    for (const marker of markersarray) {
      const index = line.indexOf(marker);
      console.log(index)
      if (index !== -1) {
        lines[i] = line.slice(0, index).trim();
        break;
      }
    }
  }
  
  const result = lines.join(' ');
  
  return result;
}

console.log(changeStr(strInput, markersInput))

