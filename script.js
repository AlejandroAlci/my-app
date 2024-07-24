const taskList = document.getElementById('tasks');
const newTaskForm = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

let tasks = [];

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const newTask = {
        título: taskTitle,
        descripción: taskDescription
    };
    tasks.push(newTask);
    renderTasks();
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const taskHTML = `
            <li>
                <h3>${task.título}</h3>
                <p>${task.descripción}</p>
            </li>
        `;
        taskList.innerHTML += taskHTML;
    });
}

renderTasks();