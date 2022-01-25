let emailChars = /[a-zA-Z0-9]@/;
let emailForm = document.querySelectorAll("input[type='email']");

let msg = document.createElement("p");
msg.innerHTML = "Please Check your Email";
msg.style.color = "tomato";

emailForm.forEach(e => e.addEventListener("blur",function (){
    if(!emailChars.test(e.value)){
        e.parentNode.nextElementSibling.appendChild(msg);
        e.style.cssText = "border:1px solid tomato"
    }else{
        msg.innerHTML = "";
        e.style.cssText = "border:1px solid black"
    }
}));
