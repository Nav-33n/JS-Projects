const UserName = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.querySelector(".submit");

const rule1 = document.getElementById("r1");
const rule2 = document.getElementById("r2");
const rule3 = document.getElementById("r3");
const rule4 = document.getElementById("r4");
const header = document.getElementById("head");
const meme = document.querySelector(".meme");


const upperLower = /(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]/;
const letterNumber = /(?=.*[a-z])(?=.*[0-9])/;
const specialCharacter = /\W+/;

let pass = false;

setInterval(rules, 1000);
function rules() {
    let passLen = password.value;
    if(passLen.length >= 12){
        rule1.style = `background-color: green;`;
    } else {
        rule1.style = `background-color: rgb(177, 66, 66);`;
    }

    if(upperLower.test(passLen)){
        rule2.style = `background-color: green;`;
    } else{
        rule2.style = `background-color: rgb(177, 66, 66);`;
    }

    if(letterNumber.test(passLen)){
        rule3.style = `background-color: green;`;
    } else{
        rule3.style = `background-color: rgb(177, 66, 66);`;
    }

    if(specialCharacter.test(passLen)){
        rule4.style = `background-color: green;`;
    } else{
        rule4.style = `background-color: rgb(177, 66, 66);`;
    }

    if(!(passLen.length >= 12) || !upperLower.test(passLen) || !letterNumber.test(passLen) || !specialCharacter.test(passLen)){
        pass = false;
    } else{
        pass = true;
    }
}

loginBtn.addEventListener('click', () => {
    if(pass){
        header.textContent = `Welcome`;
        meme.style.display = "block";

    } else{
        alert("Complete all Password Rules");
    }
});
