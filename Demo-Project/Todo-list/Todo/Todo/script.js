const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// โหลดงานจาก LocalStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// ฟังก์ชันเพื่อแสดงงาน
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// ฟังก์ชันเพื่อบันทึกงานไปยัง LocalStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// เพิ่มงานใหม่
addButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        saveTasks();
        renderTasks();
        taskInput.value = '';
    }
});

// ลบงาน
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        const index = parseInt(event.target.dataset.index);
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
});

// แสดงงานเริ่มต้น
renderTasks();