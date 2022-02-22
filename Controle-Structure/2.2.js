const readlineSync = require("readline-sync");

let a = 3
let b = 13
let c = 8


let readline = readlineSync.question("Combien ?");

if ((c > a) && (c < b)) {
    console.log("YES !!");
}
