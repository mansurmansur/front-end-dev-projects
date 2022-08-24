"use strict"

// functionalities
//   - enter new list item then press add btn
//   - purpulate the list in the bottom
const add_input = document.querySelector('.add-input');
const add_btn = document.querySelector('.add');
const filter_input = document.querySelector(".filter-input");
const list_container = document.querySelector(".list");

// new list item
const listEl = document.createElement("div");
listEl.classList.add("list-item");
const pEL = document.createElement("p");
const buttonEl = document.createElement("button");
const imgEl = document.createElement("img");
imgEl.setAttribute("src", "img/noun-delete-1053853.svg");
buttonEl.classList.add("delete");
buttonEl.appendChild(imgEl);
listEl.append(pEL);
listEl.append(buttonEl);

//add item to list
add_btn.addEventListener("click", () => {
    if(add_input.value == ""){
        alert("error input an item in the text box");
    } else {
        pEL.innerHTML = add_input.value;
        let item = document.createElement("li");
        item.append(listEl);
        list_container.lastChild.after(item);
        add_input.value = "";
    }
});

console.log(list_container);