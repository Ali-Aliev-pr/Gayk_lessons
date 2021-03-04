const btnElem = document.getElementById('btn')
const inputElem = document.getElementById('input')
const outputElem = document.getElementById('output')

function handler(){
    let value = inputElem.value;
    let upValue = value.toUpperCase()
    // outputElem.innerText = outputElem.innerText + '\n' + upValue
    // outputElem.innerText = upValue
    if (upValue == 'Ali'){
        console.log('Thats Great')
    }
    else{
        console.log(upValue)
    }
}

// btnElem.onclick()
inputElem.addEventListener('input', handler)