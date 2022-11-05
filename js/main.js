"use strict";
let randomNumberArray = [];
//Genero un Array con 5 numeri random tra 1 e 100, diversi tra loro.
generateRandomNumber();
//Nascondo i numeri
hideNumber();
//Chiedo all'utente i numeri da indovinare dopo 40 secondi
setTimeout(askForNumberAndCheck, 31000);






/*-----------------------------------------------
            FUNCTIONS
-------------------------------------------------*/
function generateRandomNumber(){



    while(randomNumberArray.length < 5){

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if(randomNumberArray.indexOf(randomNumber) === -1) randomNumberArray.push(randomNumber);

    }

    document.getElementById("random-number").innerHTML = randomNumberArray;
    

}


function hideNumber(){

    setTimeout(function(){

        document.getElementById("random-number").innerHTML = "";

    }, 30000)
}

function askForNumberAndCheck(){

    let numberArray = [];
    let correctNumberArray = [];

    for(let i = 0; i < 5; i++){

        numberArray[i] = Number(prompt("Inserisci un numero:"));

        if(randomNumberArray.includes(numberArray[i])){
            correctNumberArray.push(numberArray[i]);
        }
    }

    document.getElementById("correct-number").innerHTML = "I numeri che hai indovinato: " + correctNumberArray;
    document.getElementById("total-correct-number").innerHTML = "Quanti numeri hai indovinato: " + correctNumberArray.length;
    document.getElementById("user-number").innerHTML = "I numeri che hai inserito sono: " + numberArray;

    console.log(numberArray);
    console.log(randomNumberArray);
    console.log(correctNumberArray);

    

    
}
