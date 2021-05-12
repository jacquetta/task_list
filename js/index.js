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
      return true;
    }
  }

