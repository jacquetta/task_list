let tasks = new TaskManager();
    
const newForm = document.getElementById('formName')
newForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('newTaskNameInput').value;
  const description = document.getElementById('newTaskDescriptionInput').value;
  const assignedTo = document.getElementById('newTaskAssignedInput').value;
  const dueDate = document.getElementById('newTaskDueDateInput').value;
  const status = document.getElementById('newTaskStatus').value;
  tasks.addTask(name, description, assignedTo, dueDate, status);
  // console.log(name, description, assignedTo, dueDate, status);
})

function validateForm() {
  let y = document.forms["formName"]["taskName"].value;
  if (y == "" || y == null) {
    alert("Fill out all inputs!");
    let alertDialog = document.getElementById('submitBtn');
    alertDialog.style.display = 'block';
    return false;
  } else {
    alert('Task Added!');
    // tasks.addTask(validFormFieldInput);
    return true;
  }
}


 

// validFormFieldInput(newTaskNameInput);
// validFormFieldInput(newTaskDescriptionInput);
// validFormFieldInput(newTaskAssignedInput);
// validFormFieldInput(newTaskDueDateInput);
// validFormFieldInput(newStatusTask);


  // function validateForm() {
  //   let y = document.forms["formName"]["taskName"].value;
  //   if (y == "" || y == null) {
  //     alert("Fill out all inputs!");
  //     let alertDialog = document.getElementById('submitBtn');
  //     alertDialog.style.display = 'block';
  //     return false;
  //   } else {
  //     alert('Task Added!');
  //     tasks.addTask(names,description, assignedTo, dueDate, status);
  //     return true;
  //   }
  // }

// let tasks = new TaskManager();
// tasks.addTask('Chores', 'mopping', 'James', '05/14/2021', 'Todo');
tasks.addTask(description);
console.log(tasks);