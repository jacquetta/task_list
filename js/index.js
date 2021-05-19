let tasks = new TaskManager();
let taskHtml = createTaskHtml();


const newForm = document.getElementById('formName');
newForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('newTaskNameInput').value;
  const description = document.getElementById('newTaskDescriptionInput').value;
  const assignedTo = document.getElementById('newTaskAssignedInput').value;
  const dueDate = document.getElementById('newTaskDueDateInput').value;
  const status = document.getElementById('newTaskStatus').value;

  if(name == '' || name == null){
    document.getElementById('newTaskNameInput').style.border = "thin solid red";
    alert('Please enter task name');
    return false;
  } else if(description == '' || description == null){
    document.getElementById('newTaskDescriptionInput').style.border = "thin solid red";
    alert('Please enter task description');
    return false;
  } else if(assignedTo == '' || assignedTo == null){
    document.getElementById('newTaskAssignedInput').style.border = "thin solid red";
    alert('Please enter name for assigned');
    return false;
  } else if(dueDate == '' || dueDate == null){
    document.getElementById('newTaskDueDateInput').style.border = "thin solid red";
    alert('Please select due date for task');
    return false;
  } else if(status == 'select'){
    alert('Please select status');
    return false;
  }else{
    alert("Task added")
    tasks.addTask(name, description, assignedTo, dueDate, status);
    tasks.render();
    return true;}
});

let listTasks = document.querySelector('#task-list');
console.log(listTasks);
listTasks.addEventListener('click', (event) => {
  event.preventDefault();
  if(event.target.classList.contains('done-button') == true){
    // let parentTask = document.querySelector('.list-group').children;
    let parentTask = event.target.parentElement;
    console.log(parentTask);
  }
});


console.log(tasks);