const taskBox = document.getElementById('taskBox');
const addBtn = document.getElementById('addBtn');
const listOfTasks = document.getElementById('listOfTasks');

addBtn.addEventListener('click', () => {
  const newTask = taskBox.value.trim();

  if (newTask !== '') {
    const newListItem = document.createElement('li');
    newListItem.textContent = newTask;
    newListItem.classList.add('task-item');

    listOfTasks.appendChild(newListItem);
    taskBox.value = '';
  } else {
    alert('You forgot to type a task 😅');
  }
});

taskBox.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addBtn.click();
  }
});
