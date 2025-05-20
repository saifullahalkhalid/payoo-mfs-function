// step:1 > set event Handler
document.getElementById('button-login').addEventListener('click', function(event){

    // step:2 > prevent default behavior ( prevent reloading browser) 
    event.preventDefault();
console.log('Login button clicked');
// step:3 > get the phone number
const phoneNumber = document.getElementById('phone-number').value;
console.log(phoneNumber)
// step:4 > get the pin number
const pinNumber = document.getElementById('pin-number').value;
console.log(pinNumber);

// temporary  system

if(phoneNumber === '0123456789' && pinNumber =='1234'){
    // console.log('You are logged in');
    window.location.href = 'home.html';
}
else{
    alert('Wrong phone number or pin');
}



})