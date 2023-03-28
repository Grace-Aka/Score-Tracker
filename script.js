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
