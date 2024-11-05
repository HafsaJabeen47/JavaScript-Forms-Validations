// Lecture 5 Coding Approach
// let submit = document.querySelector('#submit');

// let isEmpty = (holder)=>{
//    return holder.children[1].value === '' ? true : false //shorform of if/else

// }
// submit.addEventListener('click', (event)=>{
//     event.preventDefault();
//     let username = document.querySelector('#username');
//     console.log(isEmpty(username));

// });
// //   ye opr wali line if/else ka shorform hai.
//     if(holder.children[1].value === ''){
//         return true
//     }else{
//         return false
//     }  
//     Note: if else ye wali approach bohat old ho chuki hai is ki bjay hum aik hi line me if else ko define kren gen question mark and colon se. ? :


    
// Lecture 6 Basic Validation
let submit = document.querySelector('#submit');
let isEmpty = (holder)=>{
    let result = holder.children[1].value === '' ? true : false
    if (result) {
        holder.classList.remove('success')
        holder.classList.add('error')
        holder.children[4].innerHTML = 'Value Is Required'

    } else {
        holder.classList.remove('error')
        holder.classList.add('success')
        holder.children[4].innerHTML = ''
    }
    return result
}

submit.addEventListener('click', ()=>{
    let username = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirm = document.querySelector('#confirm');
    // isEmpty(username);
    // isEmpty(email);
    // isEmpty(password);
    // isEmpty(confirm);

    if(isEmpty(username) && isEmpty(email) && isEmpty(password) && isEmpty(confirm)){
        if(lengthChecker(password, 6) && lengthChecker(confirm, 6)){
        passwordValidator(password, confirm)
    }
    }

    // lengthChecker(confirm, 6)


    // passwordValidator(password, confirm)
});


// Lecture 7 Basic Password Validation

let lengthChecker = (holder, len = 3)=>{
    let result = holder.children[1].value.length >= len

    if (!result) {
        holder.classList.remove('success')
        holder.classList.add('error')
        holder.children[4].innerHTML = `Length should be atleast ${len} characters`

    } else {
        holder.classList.remove('error')
        holder.classList.add('success')
        holder.children[4].innerHTML = ''
    }
    return result

}

let passwordValidator = (keyholder, confirmHolder)=> {
    let result = keyholder.children[1].value === confirmHolder.children[1].value

    if (!result) {
        confirmHolder.classList.remove('success')
        confirmHolder.classList.add('error')
        confirmHolder.children[4].innerHTML = `Confirm and password should be same`

    } else {
        confirmHolder.classList.remove('error')
        confirmHolder.classList.add('success')
        confirmHolder.children[4].innerHTML = ''
    }
    return result
}






// Note: operators: how give true false answers
// true and false = false;
// true and true = true;
// false and false = false;
// false and true  = false;
