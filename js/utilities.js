/* 

*common shared function




*/
// function getInputFieldValueById(){

// console.log('we will get value by id')

// const addMoney = document.getElementById('input-add-money').value;

// return addMoney;
// }
function getInputFieldValueById(id){

const inputValue = document.getElementById(id).value;
const inputNumber = parseFloat(inputValue);
return inputNumber;

}


function getTextValueById(id){

const textValue = document.getElementById(id).innerText;
const textNumber = parseFloat(textValue);
return textNumber;

}

function showSectionById(id){
    
// hide all the section

document.getElementById('add-money-form').classList.add('hidden');

document.getElementById('cash-out-form').classList.add('hidden');

document.getElementById('transaction-section').classList.add('hidden');

// Show the section with the provide id as parameter

document.getElementById(id).classList.remove('hidden');


}