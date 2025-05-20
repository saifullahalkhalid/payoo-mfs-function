
document.getElementById('btn-cash-out').addEventListener('click', function(event){

event.preventDefault();

const inputCashOut = getInputFieldValueById('input-cash-out');

const cashOutPin = getInputFieldValueById('input-cash-out-pin');

if(isNaN(inputCashOut)){

    alert('Failed to cash out');
    return;
}

if(cashOutPin === 1234){

    
    const currentBalance = getTextValueById('current-amount');

    if(inputCashOut > currentBalance){

        alert('You do not have enough money to cash out');
        return;
    }

 const newBalance = currentBalance - inputCashOut;

 document.getElementById('current-amount').innerText = newBalance;
//  add to transaction history
const div = document.createElement('div');
div.classList.add('bg-gray-700');
div.innerHTML = `
<h4 class="text-2xl font-bold  ">Cash Out </h4>
<p>${inputCashOut} withdraw. New Balance ${newBalance}  </p>

`
document.getElementById('transaction-container').appendChild(div);


}
else{

    alert('Cash Out Failed. Please try again later.')
}



})