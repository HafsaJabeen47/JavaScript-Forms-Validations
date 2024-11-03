let left = document.querySelector('.left');
let right = document.querySelector('.right');
let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.image');

let slideNumber = 1;


// Right
// Short Form
let length = images.length;

let nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber*800}px)`;
    slideNumber++;
}

let prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`;
    slideNumber--;
}

let getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
        slideNumber = 1;
}

let getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*800}px)`;
        slideNumber = length;
}


right.addEventListener('click', ()=>{
    if(slideNumber < length){
       nextSlide();
    }else{
        getFirstSlide();
    }
        
});

left.addEventListener('click', ()=>{
    if(slideNumber < length){
       prevSlide();
    }else{
        getlasttSlide();
    }
        
});

// Right
// Long form
// right.addEventListener('click', ()=>{
//     if(slideNumber < images.length){
//         slider.style.transform = `translateX(-${slideNumber*800}px)`;
//         slideNumber++;
//     }else{
//         slider.style.transform = `translateX(0px)`;
//         slideNumber = 1;
//     }
    
// });