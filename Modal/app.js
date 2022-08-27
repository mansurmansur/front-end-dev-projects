'use strict'

const triggerEl = document.querySelector('.trigger');
const closeEl = document.querySelector('.close');
const modalEl = document.querySelector('.modal');

function main(){
    //add eventlistener to trigger button
    triggerEl.addEventListener('click', ()=>{
        modalEl.classList.add("open"); //opened
    })

    //close eventlistener to close button
    closeEl.addEventListener('click', (ev)=>{
        modalEl.classList.remove("open");
    })

    //close when outside modal is clicked
    window.addEventListener('click',(ev)=>{
        if(ev.target === modalEl){
            modalEl.classList.remove("open");
        }
    })
}

main();