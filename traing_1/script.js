const btnElem = document.getElementById('btn')
const inputElem = document.getElementById('input')
const box= document.getElementsByName('body')

function press(inputElem){
    box.style.background = 'red';
}

btnElem.addEventListener('click', press)