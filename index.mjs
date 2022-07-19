let signinBtn = document.querySelector('.signinBtn');
let signupBtn = document.querySelector('.signupBtn');

let signinForm = document.querySelector('.container2')
let signupForm = document.querySelector('.container')

// console.log(signupBtn);
// console.log(signinBtn);

// signupBtn.addEventListener("click", (e) => {
//     signinForm.classList.add("hide");
//     signupForm.classList.remove("hide");
// })

// signinBtn.addEventListener("click", function(){
//     signupForm.classList.add("hide");
//     signinForm.classList.remove("hide");
// })


const name = document.getElementById('name');
const username = document.getElementById('username');
    
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
    
const button = document.getElementById('submit')
    
const form = document.getElementById('form')
    
    
form.addEventListener('submit', (e) => {
    e.preventDefault();
        checkInput();
    })
    
const checkInput = () =>{
    const nameValue = name.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    
    
    //VALIDATE THE INPUTS
    //Name
    
    if (nameValue === '') {
        setError(name, 'Name cannot be empty');
    
    } else {
        setSuccess(name);
    }
    
    //Username
         
    if (usernameValue === '') {
        setError(username, 'Username cannot be empty');
    
    } else {
        setSuccess(username);
    }
    
    //Email
    
    if (emailValue === '')  {
        setError (email, 'Email cannot be empty')
    } else if (!isEmail(emailValue)) {
        setError (email, 'Looks like this is not an email')
    } else {
        setSuccess(email);
    }
    
    //Phone
    
    if (phoneValue === '')  {
        setError (phone, 'phone cannot be empty')
    } else if (!isPhone(phoneValue)) {
        setError (phone, 'Looks like this is not a +234 number')
    } else {
        setSuccess(phone);
    }

    //Password
    
    if (passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else {
        setSuccess(password);
    }
}
    
const setError = (input, message) =>{
         
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}
    
const setSuccess =(input)=>{
    const formControl = input.parentElement;
    formControl.className='form-control success'
}
    
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone() {
    return mtn, glo, airtel, etisalat;
}

let mtn = ['0703', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913'];
let glo = ['0705', '0805', '0807', '0811', '0815', '0905'];
let airtel = ['0701', '0708', '0802', '0808', '0812', '0902', '0907', '0901', '0912'];
let etisalat = ['0809', '0817', '0818', '0908', '0909'];

// import startApp from './app.mjs';

// document.addEventListener('DOMContentLoaded', startApp); 
