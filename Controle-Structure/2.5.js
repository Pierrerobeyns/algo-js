const readlineSync = require("readline-sync");

let n = readlineSync.question("What's your favorite number ?");

while (n !=42 ){

    if (n != 42){
        console.log("Are you sure?");
        n = readlineSync.question("What's your favorite number ?");
    } else if (n == 42 ){
        break;
    }
}