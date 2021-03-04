const btnElem = document.getElementById('btn');
const inputElem = document.getElementById('input');
const outputElem = document.getElementById('output');

function press(){
    let value = inputElem.value;
    let upValue = value.toUpperCase();
    outputElem.innerText = upValue;
}

btnElem.addEventListener('click', press);

// outputElem.innerText = upValue;
// console.log(typeof(upValue))