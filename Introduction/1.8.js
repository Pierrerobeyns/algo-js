const readlineSync = require("readline-sync");



let a = readlineSync.question("C'est quoi cet objet ?");
console.log("Il reste 2 questions");
let b = readlineSync.question("Il y a quoi dans ce film ?");
console.log("Il reste 1 question");
let c = readlineSync.question("Dis-moi un animal légendaire");
console.log("Attention tu fais tomber ton" + a + "il a été rattrapé par un" + b + 
"Ensuite il est reparti sur le dos de son" + c);