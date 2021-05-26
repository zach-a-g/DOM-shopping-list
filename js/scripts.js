'use strict';

const generateListButton = document.querySelector('#generateList');
const list = document.querySelector('#myList');
const inputs = document.querySelectorAll('.input');

generateListButton.addEventListener('click', function () {
    list.innerHTML = "";
    const h1element = document.createElement(`h1`);
    h1element.innerText = (`My Shopping List`);
    list.append(h1element);
    inputs.forEach(function(item) {
        const listItem = document.createElement('ul');
        listItem.innerText = item.value;
        list.append(listItem);
    });
});
