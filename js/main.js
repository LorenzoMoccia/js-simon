"use strict";

//Genero un Array con 5 numeri random tra 1 e 100, diversi tra loro.
generateRandomNumber();
//Nascondo i numeri
hideNumber();







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