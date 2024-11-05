// Lecture 6 Basic Validation
let submit = document.querySelector('#submit');

let isEmpty = (holder)=>{
   let result = holder.children[1].value === '' ? true : false

    if(result){
        holder.classList.remove('success')
        holder.classList.add('error')
        holder.children[4].innerHTML = 'Value Is Required'
    }else{
        holder.classList.add('success')
        holder.classList.remove('error')
        holder.children[4].innerHTML = ''
    }
    return result
}

submit.addEventListener('click', ()=>{
    let username = document.querySelector('#username');
    isEmpty(username)
});

// Lecture 7 Basic Password Validation

let isPassword = (holder)=>{
    let result = holder.children[1].value === '' ? true : false
    
    if(result){
        holder.
    }
}

submit.addEventListener('click', ()=>{
    let password = document.querySelector('password');
    let confirm = document.querySelector('confirm');
});

