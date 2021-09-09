let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm");
let form= document.querySelector("form");
// let error = document.querySelector("small");


const emptyFieldCheck = (inp)=> {
inp.forEach(el => {
 if(el.value === "") {
 
  el.classList.add("error");
  
 } else {
  
   el.classList.add("success");
     }
    }
   )
 }

const lengthCheck = (el) => {
 let error = el.parentElement.lastElementChild;
 if(el.value.length >0 && el.value.length <= 3) {
 
  error.className = "show";
  error.innerText = "Username should be greater than 3 characters";
  el.className = "error";
 }else if (el.value.length > 13) {
  let error = el.parentElement.lastChild;
  error.className = "show";
  el.className = "error";
  error.innerText = "Username should be less than 13 characters";
 }
}

function validateEmail(em) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(em);
}








function validEmail(el) {
if(el.value) {
  let error = el.parentElement.lastElementChild;
  if( validateEmail(email.value)) {
    el.className = "success";
    error.className = "show";
    error.innerText = "Email is Valid";
    error.style.color = "rgb(66, 248, 112)";
  }else {
    el.className = "error";
    error.className = "show";
    error.innerText = "Email is invalid";
    error.style.color = "rgb(246, 54, 54)";
  }
 }
}

const passwordLengthCheck = el=> {
 if(el.value !== "") {
  let error = el.parentElement.lastElementChild;
  error.className ="show";
  if(el.value.length <= 3) {
  error.innerText = "Password is weak";
 }else if(el.value.length > 3 && el.value.length < 7) {
  error.style.color = "rgb(66, 248, 112)";
  error.innerText = "Password is moderate";
 }else if(el.value.length > 7 && el.value.length < 13) {
  error.style.color = "rgb(66, 248, 112)";
  error.innerText = "Password is Strong";
 }
}
}


const passwordMatchCheck = (str1, str2)=> {
 let error = str2.parentElement.lastElementChild;
if(str1.value !== "" && str2.value !== "") { 
 error.className ="show";

 if(str1.value === str2.value) {
  str1.className = "success";
  str2.className = "success";
  error.innerText = "Passwords matched";
  error.style.color = "rgb(66, 248, 112)";
 }else {
  str1.className = "error";
  str2.className = "error";
  error.innerText = "Passwords do not match";
 }
}
}

form.addEventListener("submit", function(e){
 e.preventDefault();
 emptyFieldCheck([userName, email, password, confirmPassword]);
 lengthCheck(userName);
 validEmail(email);
 passwordLengthCheck(password);
 passwordMatchCheck(password, confirmPassword);
}
)
