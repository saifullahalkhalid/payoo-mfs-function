// step-1:

document.getElementById('btn-add-money').addEventListener('click', function(event){

event.preventDefault();

// const addMoneyInput = document.getElementById('input-add-money').value;

// const addMoneyInputNumber = parseFloat(addMoneyInput);
console.log(' add money btn clicked')
addMoney = getInputFieldValueById('input-add-money');
pinNumber = getInputFieldValueById('input-pin-number');

// console.log('add money value: ', addMoney,pinNumber);
// verify the pin number
if(isNaN(addMoney)){
    alert('Failed to add money');

    return;
}

if(pinNumber === 1234){
const amount = getTextValueById('current-amount');

const newBalance = amount + addMoney;

document.getElementById('current-amount').innerText = newBalance;

// add to transaction history

const p = document.createElement('p');
p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}`;
 console.log(p);

//  should be a common function
document.getElementById('transaction-container').appendChild(p);

}
else{

    alert('Failed to add money. Please try again later')
}

});