const addBtn = document.getElementById('btn');
const todoinput = document.getElementById('todo-input');
const todoContainer = document.getElementById('todoContainer');

addBtn.addEventListener('click', () => {
    const value = todoinput.value
    const li = document.createElement('li')
    li.innerText = value
    const delButton = document.createElement('button')
    delButton.innerText = "X"
    li.appendChild(delButton)
    delButton.addEventListener('click', function(){
        li.remove()
    })
    todoContainer.appendChild(li);
    todoinput.value = '';
})


