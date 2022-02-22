const readlineSync = require("readline-sync");

let age = 17

let readline = readlineSync.question("How old are you?");

if (age >= 18) {
    console.log("You're an adult !");
} else {
    console.log("You're not yet an adult !");
}