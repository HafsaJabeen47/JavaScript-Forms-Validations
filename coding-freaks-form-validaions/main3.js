// Form Validation By Programming Guruji and By me
// this approach which i used is not good to go because in future when i add new elements in HTML then automatically children[0] will changed at their places so we need to get element by ID directly.

let submit = document.querySelector('#submit');

// username
let userFun = ()=>{
    let username = document.querySelector('#username');

    if(username.children[1].value === '' || username.children[1].value.length <= 3){
        username.classList.add('error')
        username.children[4].innerHTML = 'Please Enter Your Full Name';
       
    }else{
        username.classList.add('success')
    }
}

// Password 
let passFun = ()=>{
    let password =document.querySelector('#password');
    let confirm = document.querySelector('#confirm');


    if(password.children[1].value === '' && confirm.children[1].value === ''){
        password.classList.add('error');
        password.children[4].innerHTML = 'Please Enter Your Password';
        confirm.classList.add('error');
        confirm.children[4].innerHTML = 'Please First Enter Your Password';

    }else if(password.children[1].value.length <= 5){
        password.classList.add('error');
        password.children[4].innerHTML = 'Password Must Be Above 5 Characters';

    }else if (password.children[1].value.length !== confirm.children[1].value.length){
        confirm.classList.add('error')
        confirm.children[4].innerHTML = 'Please Enter Same Password'
        password.classList.add('success')
    }
    else{
        password.classList.add('success')
        confirm.classList.add('success')
    }
    
}



submit.addEventListener('click', ()=>{
    userFun()
    passFun()
});