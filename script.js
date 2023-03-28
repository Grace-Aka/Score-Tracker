const prompt = require('prompt-sync')();

let input = prompt ('Please input a score between 0 and 100: ');

function checkInput(){
    if (input >= 0 && input <= 30 || input >= 31 && input <= 60 || input >= 61 && input <= 100  && input !='') {
       performOperation();
    } else {
        console.log('Please insert a valid score!');
    }

    resetCheckInput();
  }

checkInput();


function performOperation(){
    
    if (input >=0 && input <=30) {
        console.log("Try Harder your score is low!");
        return input;

    } else if (input >=31 && input <=60) {
        console.log("Hey that is a good score but you can do better!");
        return input;
    } else if ( input >=61 && input <=100) {
        console.log("Wow you did great!");
        return input;
    } else {
        console.log('Please input a vaild score')
    }
    performOperation();
}


function resetCheckInput() {
    input = prompt('Please input a score between 0 and 100: ');
    checkInput();
}