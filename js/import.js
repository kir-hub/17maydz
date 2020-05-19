'use strict'



import {newclass , aa,age,arr} from './index.js';


let ss = new newclass('name', age);

console.log(ss)





3
let form = document.forms.form;
let elem = form.elements.f1;
console.log(elem.value)

document.getElementsByName ('f1');

elem.addEventListener('mouseover', mouseover)
elem.addEventListener('mouseout', mouseout);

elem.addEventListener('click', click);



function click() {
    elem.style.backgroundColor = 'pink';
}
function mouseover() {
        elem.style.borderColor = 'deepskyblue'; 
}
function mouseout() {
    elem.style.borderColor = 'black'
}






let rem = document.querySelector('#remove')

let closeButton = document.getElementById('close')

closeButton.addEventListener('click', off)

function off() {
    rem.remove();
}


