"use strict"

//all the elements needed
const mainEl = document.querySelector(".main");
let buttonEl = document.querySelectorAll(".button");


buttonEl.forEach(button => {
    button.addEventListener("click", (ev)=>{
        if (mainEl.style.backgroundColor == ev.target.style.backgroundColor) {
            //do nothing
        } else if(ev.target.classList.contains("green")){
            mainEl.style.backgroundColor = ev.target.style.backgroundColor;
            console.log("Hi")
        } else if (ev.target.classList.contains("purple")){
            mainEl.style.backgroundColor = ev.target.style.backgroundColor;
            console.log("Hi")
        } else if (ev.target.classList.contains("blue-2")){
            mainEl.style.backgroundColor = ev.target.style.backgroundColor;
            console.log("Hi")
        } else if (ev.target.classList.contains("blue-3")){
            mainEl.style.backgroundColor = ev.target.style.backgroundColor;
            console.log("Hi")
        } else if(ev.target.classList.contains("orange")){
            mainEl.style.backgroundColor = ev.target.style.backgroundColor;
            console.log("Hi")
        } else if(ev.target.classList.contains("yellow")){
            mainEl.style.backgroundColor = ev.target.style.backgroundColor;
            console.log("Hi")
        }
    })
});