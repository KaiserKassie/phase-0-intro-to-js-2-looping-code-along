// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, holiday) {
    let message = []
    for (let i=0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
        debugger;
    }    
    return message
}

writeCards(names, "surprise");




function countDown(thisNumber) {
    while (thisNumber >= 0) {
    console.log(thisNumber--);
    }
}

countDown(4)