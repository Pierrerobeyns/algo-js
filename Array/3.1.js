const readlineSync = require("readline-sync");


let array = [100, 101, 102];
let n = 0;

for (let i = 0; i < array.length; i++) {
    n += array[i];
}
console.log(n);
