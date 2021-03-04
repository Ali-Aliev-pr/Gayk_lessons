let txtElem = document.getElementById('txt');
let btnElem = document.getElementById('btn');
let outElem = document.getElementById('out');
function press(){
    outElem.innerText = txtElem;
}

btnElem.addEventListener('click', press)