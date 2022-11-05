"use strict";






function generateRandomNumber(){

    const randomArray = [];

    while(randomArray.length < 5){

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if(randomArray.indexOf(randomNumber) === -1) randomArray.push(randomNumber);

    }

    console.log(randomArray);

}