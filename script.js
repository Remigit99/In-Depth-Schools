'use strict';

// window-scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', scrollY >0)
})


// FAQs

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');
        // const icon = document.querySelector("plus-minu");
        // const icon2 = document.querySelector("plus-minu");
        //  icon.className === "plus-minu" ? icon2.className = "minus"
    })
})


const navBarLinks = document.querySelector(".nav__links");
const openIcon = document.querySelector(".open__menu");
const closeIcon = document.querySelector(".close__menu");

openIcon.addEventListener('click', () =>{
    navBarLinks.style.display = 'block';
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
})

closeIcon.addEventListener('click', () =>{
    navBarLinks.style.display = 'none';
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
})