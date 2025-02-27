// JavaScript Functions (To-Do List)
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">ลบ</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

addButton.addEventListener("click", addTask);
renderTasks();

// JavaScript Functions (Grade Calculator)
function calculateGPA() {
    const subjects = [
        { id: "CSI101", credits: 3 },
        { id: "CSI102", credits: 3 },
        { id: "CSI203", credits: 3 },
        { id: "CSI204", credits: 3 },
        { id: "CSI305", credits: 3 },
    ];

    let totalCredits = 0;
    let totalGradePoints = 0;

    subjects.forEach(subject => {
        const score = parseInt(document.getElementById(subject.id).value);
        if (!isNaN(score)) {
            totalCredits += subject.credits;
            totalGradePoints += (score / 10) * subject.credits;
        }
    });

    const gpa = totalGradePoints / totalCredits;
    document.getElementById("gpaResult").textContent = `GPA: ${gpa.toFixed(2)}`;
}

// JavaScript Functions (API Data Fetching)
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        const userList = document.getElementById("userList");
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email} - ${user.address.street}, ${user.address.city}`;
            userList.appendChild(li);
        });
    });

// JavaScript Functions (Lottery Generator)
function generateLotteryNumbers() {
    let numbers = [];
    for (let i = 0; i < 6; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers.join("");
}

function checkLottery() {
    const lotteryNumbers = generateLotteryNumbers();
    const userGuess = document.getElementById("userGuess").value;
    const result = lotteryNumbers === userGuess ? "ถูกรางวัล!" : `เสียใจด้วย! เลขที่ออก: ${lotteryNumbers}`;
    alert(result);
}