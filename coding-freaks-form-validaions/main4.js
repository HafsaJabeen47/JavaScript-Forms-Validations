// get ids
let userinput = document.getElementById("userinput");
let emailinput = document.getElementById("emailinput");
let passinput = document.getElementById("passinput");
let confinput = document.getElementById("confinput");

// error ids
let usererror = document.getElementById("usererror");
let emailerror = document.getElementById("emailerror");
let passerror = document.getElementById("passerror");
let conferror = document.getElementById("conferror");

function data(){
    if (userinput.value == ""){
        usererror.innerHTML = "*Number is required";
        usererror.classList.add('error')
    }
    else{
        usererror.innerHTML = "";
    }
}