"use strict"

//DOM
const searchButton = document.querySelector(".searchBtn");
const searchBox = document.querySelector(".search");
const div = document.querySelector(".form");

//event listener
searchButton.addEventListener('click', ()=>{
    //increase form width
    div.classList.remove("hideSearch");
    div.classList.add("showSearch");
    searchBox.classList.remove("hide");
    searchBox.classList.add("show");
});


