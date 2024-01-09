let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick=()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

windows.onscroll=()=>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

// -------smoothly changing background images ***fails***----------
/* let sectionBackgrounds=document.querySelectorAll(".background");

let imageIndex=0;

function changeBackground(){
    sectionBackgrounds[imageIndex].classList.remove("showing");

    imageIndex++;

    if(imageIndex>=sectionBackgrounds.length){
        imageIndex=0;
    }

    sectionBackgrounds[imageIndex].classList.add(".showing");
}
setInterval(changeBackground,3000); */

// -------smoothly changing background images----------