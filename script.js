let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let sizePass = document.querySelector('#valor');
let password = document.querySelector('#password');
let containerPass = document.querySelector('#container-password');
let tooltip = document.querySelector('#tooltip');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()/';
let newPass = '';

sizePass.innerHTML = sliderElement.value;
slider.oninput = function() {
    sizePass.innerHTML = this.value;
}

function generatePassword(){
    let pass ='';
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random()* n))
    }
    containerPass.classList.remove('hide');
    password.innerHTML = pass;
    newPass = pass;

}
function copyPass() {
    navigator.clipboard.writeText(newPass);
    tooltip.innerHTML = 'Senha copiada!'
}
