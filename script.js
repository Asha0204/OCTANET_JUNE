document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, dueDateInput.value);
        taskInput.value = '';
        dueDateInput.value = '';
    });

    function addTask(task, dueDate) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task} (Due: ${dueDate})</span>
            <div>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </div>
        `;
        
        const completeBtn = li.querySelector('.complete');
        const deleteBtn = li.querySelector('.delete');

        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        todoList.appendChild(li);
    }
});
