const codeR = prompt("write your r:")
const codeG = prompt("write your g:")
const codeB = prompt("write your b:")


function rgb(r, g, b) {

     r = Math.max(0, Math.min(255, r));
     g = Math.max(0, Math.min(255, g));
     b = Math.max(0, Math.min(255, b));
    

    const codehexR = r.toString(16).padStart(2, '0');
    const codehexG = g.toString(16).padStart(2, '0');
    const codehexB = b.toString(16).padStart(2, '0');

    
    return`#${codehexR}${codehexG}${codehexB}` ;
}
console.log(rgb(codeR, codeG, codeB))