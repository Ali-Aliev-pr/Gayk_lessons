const todo_list = ['Поесть', 'Попить', 'Побегать', 'Покататься'];
const todo__list = [];
let output = document.getElementById('output');
let button = document.getElementById('btn');
let input = document.getElementById('input');
let bttn = document.getElementById('but');

// function render(){
//     output.innerText = todo_list;
// }

function readFromLocalStorage(){
    return JSON.parse(localStorage.getItem('todo_list') || '[]');
}

function writeFromLocalStorage(array){
    localStorage.setItem('todo_list', JSON.stringify(array));
}



function render(){
    output.innerText = '';
    todo__list.forEach(elem=>{
        let li = document.createElement('li');
        li.innerText = elem;
        output.appendChild(li)
    });
};

function addTodo(){
    const value = input.value;
    todo__list.push(value);
    writeFromLocalStorage(todo_list);
    render();
}
const todo___list = readFromLocalStorage();
render();

button.addEventListener('click', addTodo);