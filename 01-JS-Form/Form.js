const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');

submitBtn.addEventListener('click', (event)=>{
    event.preventDefault();

    if(validateName() == true){
        alert('Form Submitted Successfully');
    }
});


function validateName(){
    let name = document.getElementById('name').value;

    if(name.length == ''){
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return flase;
    }
    return true;
};