let submitBtn =document.querySelector('#submit-btn');

function isEmpty(holder){
    // return holder.children[0].value === '' ? true : false; aj kal lkhny ka ye style popular HTMLDetailsElement. short hai. nechy jo if else ka use kia hai if else or is tran likhny ka style same output deta hai.
    if(holder.children[0].value === ''){ //holder k bad b children ko access kr skty hen.
        let fName = document.querySelector('#Fname');
        fName.style.border = '1px solid red';
        return true
    }else{
        let fName = document.querySelector('#Fname');
        fName.style.border = '1px solid green';
        return false
    }
}

submitBtn.addEventListener('click', ()=>{
    let contactForm = document.querySelector('#contact-form');
    // isEmpty(contactForm.children[0].value); // .children[0].value isko hum holder k sath b likh skty hen.
    isEmpty(contactForm);
});