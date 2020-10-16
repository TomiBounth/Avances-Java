// === es más fuerte
let passwordDB = "1234";
let input = "pep"

let login = input == passwordDB;

if (login == true) {
    console.log("Login correcto");
} else {
    console.log("Login Incorrecto");
}


// let score = 29;

if (score > 30) {

    console.log("you´re a great gamer");
} else if (score > 15) {

    console.log("fckg noob");
} else {

    console.log("you need practice");
}
//switch
let typeCard = "Credit Card";

switch(typeCard) {
    case "Debid Card":
        console.log("This is a debid card");
        break;
    case "Credit Card":
        console.log("This is a Credit Card");
        break;
    default:
        console.log("pobre xd");    
}