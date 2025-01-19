// Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const categories = document.querySelectorAll('.category');

// Event: Add Task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const task = createTask(taskText);
  document.getElementById('todo').appendChild(task);
  taskInput.value = '';
});

// Create Task Element
function createTask(text) {
    const task = document.createElement('div');
    task.className = 'task';
    task.draggable = true;
  
    // Task Text
    const taskText = document.createElement('span');
    taskText.textContent = text;
    taskText.className = 'task-text';
    task.appendChild(taskText);
  
    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Sửa';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', () => {
      const newText = prompt('Chỉnh sửa công việc:', taskText.textContent);
      if (newText !== null && newText.trim() !== '') {
        taskText.textContent = newText.trim();
      }
    });
    task.appendChild(editBtn);
  
    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Xóa';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
      task.remove();
    });
    task.appendChild(deleteBtn);
  
    // Drag Events
    task.addEventListener('dragstart', () => task.classList.add('dragging'));
    task.addEventListener('dragend', () => task.classList.remove('dragging'));
  
    return task;
  }
  
// Drag and Drop Logic
categories.forEach((category) => {
  category.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggingTask = document.querySelector('.dragging');
    category.appendChild(draggingTask);
  });
});

