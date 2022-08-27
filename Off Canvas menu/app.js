'use strict'

const navEl = document.querySelector(".navbar");
const hamburgerEl = document.querySelector(".hamburger");
const contentEl = document.querySelector(".content");
const barsEl = hamburgerEl.children;

function navToggle(){
    hamburgerEl.addEventListener('click',()=>{
        navEl.classList.toggle("open"); 
        contentEl.classList.toggle("shift");

        // for bars to change from hamburger to cross
        for (const bar of barsEl) {
            bar.classList.toggle("change");
        }
    })
}

navToggle();