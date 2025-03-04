const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addButton');
const totalTask = document.getElementById('totalTasks');
const taskComp = document.getElementById('completedTasks');


let taskCount = 0;
let taskComplete = 0;


function task(){
     // getting value of input
     let value = taskInput.value
     //  creating li element 
     const li = document.createElement('li');
     //  adding class to li element 
     li.classList.add('task-item');
     //  creating input element 
     const checkBox = document.createElement('input')
     // add inputtype chekbox
     checkBox.type = 'checkbox';

     //  adding class to input element 
     checkBox.addEventListener('change', function () {
          if (checkBox.checked) {
              checkBox.classList.add('complete');
              taskComplete++;
              taskComp.innerText = `Completed ${taskComplete}`;
          }
           else {
          //     checkBox.classList.remove('complete-checkbox');
              checkBox.classList.remove('complete');
              taskComplete--;
          }
     });
     //  creating text node to get the value of input
     const textNode = document.createTextNode('' + value)
     //  creating button 
     const delBtn = document.createElement('button');
     //  adding class to button 
     delBtn.classList.add('delete-button');
     //  adding text to button
     delBtn.innerText = 'Delete';
     //  append checkbox to li 
     li.appendChild(checkBox)
     //  append textnode to li 
     li.appendChild(textNode);
     //  append buton to li 
     li.appendChild(delBtn)
     //  they are all the part of li 
     taskList.appendChild(li);
     //  clear the value of li 
     taskInput.value = '';

     return li;
}

addBtn.addEventListener('click', () => {
  task();
  taskCount++;
   totalTask.innerText = `Total tasks: ${taskCount}`;
})

