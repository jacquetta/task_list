let tasks = new TaskManager();
tasks.addEventListener('click', validateForm);

const newTaskNameInput = document.getElementById('newTaskNameInput');
const newTaskDescriptionInput = document.getElementById('newTaskDescriptionInput');
const newTaskAssignedInput = document.getElementById('newTaskAssignedInput');
const newTaskDueDateInput = document.getElementById('newTaskDueDateInput');
const newStatusTask = document.getElementById('newStatusTask');

function validFormFieldInput(data){
    const nameTask = data.value;
    console.log("name: " + nameTask);
}

// validFormFieldInput(newTaskNameInput);
// validFormFieldInput(newTaskDescriptionInput);
// validFormFieldInput(newTaskAssignedInput);
// validFormFieldInput(newTaskDueDateInput);
// validFormFieldInput(newStatusTask);


  function validateForm() {
    let y = document.forms["formName"]["taskName"].value;
    if (y == "" || y == null) {
      alert("Fill out all inputs!");
      let alertDialog = document.getElementById('submitBtn');
      alertDialog.style.display = 'block';
      return false;
    } else {
      alert('Task Added!');
      tasks.addTask();
      return true;
    }
  }

// let tasks = new TaskManager();
// tasks.addTask('Chores', 'mopping', 'James', '05/14/2021', 'Todo');
console.log(tasks);