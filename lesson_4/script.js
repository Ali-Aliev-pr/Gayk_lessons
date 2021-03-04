// const store = localStorage.setItem('value', 'Gayk Inanz');
// const value = localStorage.getItem('value');
// console.log(value)
const btnElem = document.getElementById('btn');
function pressone(){
    console.log('Привет')
}
btnElem.addEventListener('click', pressone);

const btnElemNumber = document.getElementById('btnumber');
const txtElem = document.getElementById('txt');
function presstwo(){
    txtElem.value = txtElem.value * txtElem.value;
}
btnElemNumber.addEventListener('click', presstwo);

const getNumber = function(max = 11, min = 0){
    return Math.ceil(Math.random() * (max - min) + min);
}
const changerElem = document.getElementById('color');

var colors = ['red', 'purple', 'blue', 'orange', 'white', 'gray', 'yellow', 'green'];

function change(){
    let randomize = Math.floor(Math.random()*colors.length);
    // changerElem.style.background = randomize;
    console.log(randomize)
}

changerElem.addEventListener('click', change());