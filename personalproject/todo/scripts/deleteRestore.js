function renderDeletedTasks() {
  const deletedTasks =
    JSON.parse(localStorage.getItem("deletedTasks")) || [];
  const container = document.getElementById("deletedTaskContainer");
  container.innerHTML = "";

  deletedTasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
    <p><strong>Date Deleted:</strong> ${task.dateAdded}</p>
    <p><strong>Title:</strong> ${task.taskTitle}</p>
    <p>${task.task}</p>
    <p><em>By: ${task.name}</em></p>
    <p class="restore-btn" onclick="restoreTask(${task.id})">Restore</p>
  `;
    container.appendChild(taskDiv);
  });
}

function restoreTask(taskId) {
  let deletedTasks =
    JSON.parse(localStorage.getItem("deletedTasks")) || [];
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const taskToRestore = deletedTasks.find((task) => task.id === taskId);
  if (taskToRestore) {
    tasks.push(taskToRestore);
    deletedTasks = deletedTasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
    renderDeletedTasks();
  }
}

renderDeletedTasks();
