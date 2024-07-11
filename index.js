const taskName = document.getElementById('taskName');
const addTaskButton = document.getElementById('addTaskButton');
const taskContiner = document.getElementById('taskContainer');
let entryNumber = 0;

function addTask () {
    entryNumber++;
    taskContainer.insertAdjacentHTML("beforeend", `
        <div>
            <input type='checkbox' id='${entryNumber}'>
            <label for='${entryNumber}'>${taskName.value}</label>
        </div>
    `);
    document.getElementById(entryNumber).addEventListener('change', completeTask);
    taskName.value = '';}

    function completeTask(event) {
        const checkbox = event.target;
        const label = checkbox.nextElementSibling;
    
        if (checkbox.checked) {
            label.style.textDecoration = 'line-through';
        } else {
            label.style.textDecoration = 'none';
        }
    }

addTaskButton.addEventListener('click', addTask);