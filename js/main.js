"use strict";

//Genero un Array con 5 numeri random tra 1 e 100, diversi tra loro.
generateRandomNumber();
//Nascondo i numeri
hideNumber();
//Chiedo all'utente i numeri da indovinare dopo 40 secondi
setTimeout(askForNumber, 4000);






/*-----------------------------------------------
            FUNCTIONS
-------------------------------------------------*/
function generateRandomNumber(){

    const randomArray = [];

    while(randomArray.length < 5){

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if(randomArray.indexOf(randomNumber) === -1) randomArray.push(randomNumber);

    }

    document.getElementById("random-number").innerHTML = randomArray;
    console.log(randomArray);

}


function hideNumber(){

    setTimeout(function(){

        document.getElementById("random-number").innerHTML = "";

    }, 3000)
}

function askForNumber(){

    let numberArray = [];

    for(let i = 0; i < 5; i++){

        numberArray[i] = Number(prompt("Inserisci un numero:"));
    }

    console.log(numberArray);
}