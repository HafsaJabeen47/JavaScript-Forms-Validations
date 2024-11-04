let submit = document.querySelector('#submit');

let isEmpty = (holder)=>{
   return holder.children[1].value === '' ? true : false
//    ye opr wali line if/else ka shorform hai.
    // if(holder.children[1].value === ''){
    //     return true
    // }else{
    //     return false
    // }  Note: if else ye wali approach bohat old ho chuki hai is ki bjay hum aik hi line me if else ko define kren gen question mark and colon se. ? :
}
submit.addEventListener('click', (event)=>{
    event.preventDefault();
    let username = document.querySelector('#username');
    console.log(isEmpty(username));

});