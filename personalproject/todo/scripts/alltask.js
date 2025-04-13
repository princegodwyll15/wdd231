function renderAllTasks() {
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  const container = document.getElementById('allTasksContainer');

  if (taskList.length === 0) {
    container.innerHTML = '<p>No tasks available.</p>';
    return;
  }

  taskList.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-box');
    taskDiv.innerHTML = `
      <p><strong>Date Added:</strong> ${task.dateAdded || 'N/A'}</p>
      <p><strong>Name:</strong> ${task.name}</p>
      <p><strong>Task Title:</strong> ${task.taskTitle}</p>
      <p><strong>Task:</strong> ${task.task}</p>
    `;
    container.appendChild(taskDiv);
  });
}

renderAllTasks();
