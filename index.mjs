const nameInput = document.getElementById('name');

const username = document.getElementById('username');
const username2 = document.getElementById('username2');
    
const email = document.getElementById('email');
const email2 = document.getElementById('email2');

const phone = document.getElementById('phone');

const password = document.getElementById('password');
const password2 = document.getElementById('password2');
    
// const button = document.getElementById('submit')
    
const form = document.getElementById('form')
const form2 = document.getElementById('form2')
    
form.addEventListener('submit', (e) => {
    e.preventDefault();
        checkInput();
})

form2.addEventListener('submit', (e) => {
    e.preventDefault();
        checkInput();
})
    
const checkInput = () =>{
    const nameValue = nameInput.value.trim();
    const usernameValue = username.value.trim();
    const username2Value = username2.value.trim();
    const emailValue = email.value.trim();
    const email2Value = email2.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    // INPUT VALIDATION
    //Name
    
    if (nameValue === '') {
        setError(nameInput, 'Name cannot be empty')
    } else {
        setSuccess(nameInput);
    }
    
    //Username
         
    if (usernameValue === '') {
        setError(username, 'Username cannot be empty')
    } else {
        setSuccess(username);
    }

    if (username2Value === '') {
        setError(username2, 'Username cannot be empty')
    } else {
        setSuccess(username2);
    }
    
    //Email
    
    if (emailValue === '')  {
        setError (email, 'Email cannot be empty')
    } else if (!isEmail(emailValue)) {
        setError (email, 'Looks like this is not an email')
    } else {
        setSuccess(email);
    }
    
    if (email2Value === '')  {
        setError (email2, 'Email cannot be empty')
    } else if (!isEmail(email2Value)) {
        setError (email2, 'Looks like this is not an email')
    } else {
        setSuccess(email2);
    }

    //Phone
    
    // if (phoneValue === '') {
    //     setError(phone, 'Phone cannot be empty')
    // } else {
    //     setSuccess(phone);
    // }

    //Password
    
    if (passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Password cannot be empty');
    } else {
        setSuccess(password2);
    }
}
    
const setError = (input, message) =>{
         
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.visibility = 'visible';
    small.innerText = message;
    formControl.className = 'form-control error';
    const icon = formControl.querySelector('.fa-exclamation-circle');
    icon.classList.add('error')
    icon.style.visibility = 'visible';
}
    
const setSuccess =(input)=>{
    const formControl = input.parentElement;
    formControl.className='form-control success';
    const icon = formControl.querySelector('.fa-check-circle');
    icon.classList.add('success')
    icon.style.visibility = 'visible';
    icon.style.color = 'green';
}
    
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function Phone(phone) {
    return mtn, glo, airtel, etisalat.test(phone);
}

let signinBtn = document.getElementById("signinBtn");
let signupBtn = document.getElementById("signupBtn");

let signinForm = document.querySelector(".container2");
let signupForm = document.querySelector(".container");

signupBtn.addEventListener("click", function() {
    signinForm.classList.add("hide");
    signupForm.classList.remove("hide");
})

signinBtn.addEventListener("click", function(){
    signupForm.classList.add("hide");
    signinForm.classList.remove("hide");
})

// const log = document.querySelector('network_image');

// phone.addEventListener("input", (e)=>{
//     e.preventDefault()

//     /** this would return all the object keys
//      *  in the network map object 
//      *  ie. allNetWorks would be equal to ["mtn", "glo", "airtel", "etisalat"]
//      * */
//     const allNetWorks = Object.keys(networkMap)

//     /** once the user starts typing you can set the 
//      * image src to a default image or set it to loading till
//      * you find the right image
//     */
//     let logoResult = 'loading...'

//     /**
//      * looping through all the networks to find the right one
//      *
//      */
//     allNetWorks.forEach(network => {

//         /**
//          * get the first four characters in a string 
//          * "08031234567" => "0803"
//          */
//         const phoneFirstFour = phone.value.substr(0, 4)
        
//         /**
//          * networkMap[network] = {logo: 'c', possiblePrefixes: ["0809", ...]}
//          * networkMap[network].logo = c
//          */
//         if (networkMap[network].possiblePrefixes.includes(phoneFirstFour)){
//             logoResult = networkMap[network].logo
//         }

//     });

//     //set the value on the page
//     log.textContent = logoResult;
// });


// const networkMap = {
//     mtn: {
//         logo: 'a',
//         possiblePrefixes: ['0703', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913']
//     },
//     glo: {
//         logo: 'b',
//         possiblePrefixes: ['0705', '0805', '0807', '0811', '0815', '0905']
//     },
//     airtel: {
//         logo: 'c',
//         possiblePrefixes: ['0701', '0708', '0802', '0808', '0812', '0902', '0907', '0901', '0912']
//     },
//     etisalat: {
//         logo: 'd',
//         possiblePrefixes: ['0809', '0817', '0818', '0908', '0909']
//     },
// }

// import startApp from './app.mjs';

// document.addEventListener('DOMContentLoaded', startApp); 