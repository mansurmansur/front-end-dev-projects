'use strict'

const navEl = document.querySelector(".navbar");
const hamburgerEl = document.querySelector(".hamburger");
const contentEl = document.querySelector(".content");
const barsEl = hamburgerEl.children;

function navToggle(){
    hamburgerEl.addEventListener('click',()=>{
        navEl.classList.toggle("open"); 
        contentEl.classList.toggle("shift");

        for (let bar of barsEl) {
            console.log(bar);
        }
    })
}

navToggle();