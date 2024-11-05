// Form Validation By Programming Guruji

let submit = document.querySelector('#submit');

// username
let userFun = ()=>{
    let username = document.querySelector('#username');

    if(username.children[1].value === '' || username.children[1].value.length <= 3){
        username.classList.add('error')
        username.children[4].innerHTML = 'Please Enter Your Full Name';
        username.classList.remove('success')
       
    }else{
        username.classList.add('success')
        username.classList.remove('error')
    }
}

// password
let passwordFun = ()=>{
    let password = document.querySelector('#password');

    if(password.children[1].value === '' || password.children[1].value.length <= 5){
        password.classList.add('error');
        password.children[4].innerHTML = 'Password Must Be Above 5 Characters';
        password.classList.remove('success')
    }else{
        password.classList.add('success')
        password.classList.remove('error')
    }

}

// confirm
let confirmFun = ()=>{
    let confirm = document.querySelector('#confirm');

    if(confirm.children[1].value === '' || confirm.children[1].value.length <= ){
        confirm.classList.add('error');
        confirm.children[4].innerHTML = 'Please Enter Same Password';
        confirm.classList.remove('success')
    }else{
        confirm.classList.add('success')
        confirm.classList.remove('error')
    }

}


submit.addEventListener('click', ()=>{
    userFun()
    passwordFun()
    confirmFun()
});