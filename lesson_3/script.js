let todos = [];
const btnElem = document.getElementById('btn');
const inputElem = document.getElementById('input')
const outputElem = document.getElementById('output');
const descElem = document.getElementById('desc');
const ascElem = document.getElementById('asc');



function render(){
    outputElem.innerText = '';
    todos.forEach(elem=>{
        let pElem = document.createElement('p');
        pElem.innerText = elem;
        outputElem.appendChild(pElem)
        pElem.addEventListener('dblclick', ()=>{
            // console.log(pElem.innerText);
            todos = todos.filter(elem=>elem !== pElem.innerText);
            render();
        })
    })
}

btnElem.addEventListener('click', ()=>{todos.push(inputElem.value); render()})
descElem.addEventListener('click', ()=>{
    todos = todos.sort();
    render();
})