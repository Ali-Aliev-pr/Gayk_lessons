const todos = [];
const btnElem = document.getElementById('btn');
const inputElem = document.getElementById('input')
const outputElem = document.getElementById('output');

// function render(){
//     outputElem.innerText = '';
//     for (let i = 0; i<todos.length; i++){
//         let pElem = document.createElement('p');
//         pElem.innerText = todos[i];
//         outputElem.appendChild(pElem)
//     }
// }

function render(){
    outputElem.innerText = '';
    todos.forEach(elem=>{
        let pElem = document.createElement('p');
        pElem.innerText = elem;
        outputElem.appendChild(pElem)
    })
}


btnElem.addEventListener('click', ()=>{todos.push(inputElem.value); render();});

// ()=>console.log('Привет')