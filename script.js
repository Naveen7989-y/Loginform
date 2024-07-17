const username = document.querySelector('#username'); // Corrected ID 'usrename' to 'username'
const passkey = document.querySelector('#password');
const conpassword = document.querySelector('#conpassword');
const generate = document.querySelector('#generate'); // Corrected variable name 'genarate' to 'generate'
const copypassword = document.querySelector('#copypassword');
const signup=document.querySelector('#signup');

function passwordgenerator() {
    let lowercase = "qwertyuioplkjhgfdsaxzcvbnm";
    let uppercase = "QWERTYUIOPLAKSJDHFGZVXCBNM";
    let numbers = "1234567890";
    let specialcharacters = "!@#$%^&*";

    let maincharacters = uppercase + lowercase + numbers + specialcharacters;

    let password = "";


    for (let i = 0; i < 12; i++) {
        let index = Math.floor(Math.random() * maincharacters.length);
        password += maincharacters[index];
    }

    console.log(password);

    copypassword.value = password;
}


generate.addEventListener('click', passwordgenerator);


function Signup(){
   
}