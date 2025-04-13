const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".main-nav");
const footerYear = document.getElementById("copyright");
const lastModified = document.getElementById("lastModified");

// Footer content
const date = new Date();
footerYear.textContent = `© ${date.getFullYear()} TaskMaster, All Rights Reserved`;
lastModified.textContent = `Last modified: ${new Date(document.lastModified).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})}`;

//hambuger 
hamburger.addEventListener('click', ()=>{
  navigation.classList.toggle('visible');
})
// Display current time
function getTime() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  return "Current Time: " + h + ":" + m + ":" + s;
}

// Start the clock
function startClock() {
  setInterval(() => {
    document.getElementById("timeCont").textContent = getTime();
  }, 1000);
}

// Start when page finishes loading
window.onload = function() {
  startClock();  // Start the clock
  renderTasks(); // Render the tasks
}

let currentlyEditingId = null;
// Add or Edit Task
function addTask(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullname').value.trim();
  const taskTitle = document.getElementById('taskTitle').value.trim();
  const taskInput = document.getElementById('task').value.trim();

  if (fullName && taskTitle && taskInput) {
    let taskList = JSON.parse(localStorage.getItem('tasks')) || [];

    if (currentlyEditingId !== null) {
      const index = taskList.findIndex(task => task.id === currentlyEditingId);
      if (index !== -1) {
        taskList[index] = {
          ...taskList[index],
          name: fullName,
          taskTitle: taskTitle,
          task: taskInput
        };
        currentlyEditingId = null;
        document.getElementById('addTaskButton').textContent = 'Add Task';
      }
    } else {
      const newTask = {
        id: Date.now(),
        dateAdded: new Date().toDateString(),
        timeAdded: (() => { 
          let h = new Date().getHours();
          let m = new Date().getMinutes();
          let s = new Date().getSeconds();
        
          h = h < 10 ? '0' + h : h;
          m = m < 10 ? '0' + m : m;
          s = s < 10 ? '0' + s : s;
        
          return h + ":" + m + ":" + s; 
        })(),
        name: fullName, 
        taskTitle: taskTitle, 
        task: taskInput, 
      };
      taskList.push(newTask);
    }

    localStorage.setItem('tasks', JSON.stringify(taskList));
    renderTasks();

    // Clear inputs
    document.getElementById('fullname').value = '';
    document.getElementById('taskTitle').value = '';
    document.getElementById('task').value = '';
  }
}

// Render tasks to the page
function renderTasks() {
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const tasklistDisplay = document.getElementById("tasklistDisplay");
  tasklistDisplay.innerHTML = "";  // Clear the existing task list

  taskList.forEach(task => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-item");

    taskContainer.innerHTML = `
      <p><strong>Date Added: </strong> ${task.dateAdded} </p>
      <p><strong>Time Added: </strong> ${task.timeAdded}</p>
      <p><strong>Task Title: </strong> ${task.taskTitle}</p>
      <p><strong>Main Task: </strong>${task.task}</p>
      <p><strong><em>By: </strong>${task.name}</em></p>
      <p>
        <span style="cursor: pointer; color: blue;" onclick="editTask(${task.id})">Edit</span> | 
        <span style="cursor: pointer; color: red;" onclick="deleteTask(${task.id})">Delete</span>
      </p>
    `;

    tasklistDisplay.appendChild(taskContainer);
  });
}

// Delete task
function deleteTask(taskId) {
  let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  let deletedList = JSON.parse(localStorage.getItem("deletedTasks")) || [];

  const taskToDelete = taskList.find(task => task.id === taskId);
  if (taskToDelete) {
    deletedList.push(taskToDelete);
    taskList = taskList.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    localStorage.setItem("deletedTasks", JSON.stringify(deletedList));
    renderTasks();
  }
}

// Load task into input for editing
function editTask(taskId) {
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = taskList.find(task => task.id === taskId);

  if (task) {
    document.getElementById("fullname").value = task.name;
    document.getElementById("taskTitle").value = task.taskTitle;
    document.getElementById("task").value = task.task;

    currentlyEditingId = taskId;
    document.getElementById("addTaskButton").textContent = "Save Edit";
  }
}

// Event Listeners
document.getElementById("addTaskButton").addEventListener("click", addTask);
document.querySelector(".input-section")?.addEventListener("submit", addTask);
