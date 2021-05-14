let tasks = new TaskManager();
 
function validateForm() {
  var x = document.getElementById('newTaskNameInput').value;
  let i = document.getElementById('newTaskDescriptionInput').value;
  let j = document.getElementById('newTaskAssignedInput').value;
  let k = document.getElementById('newTaskDueDateInput').value;
  let m = document.getElementById('newTaskStatus').value;
  if (x == '' && i === '' && j === '' && k === '' && m === '') {
    alert("Form must be filled out");
    return false;
  }
}
// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();

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

// function validateForm() {
//   let y = document.forms["formName"]["newTaskNameInput"].value;
//   if (y == "" || y == null) {
//     alert("Fill out all inputs!");
//     let alertDialog = document.getElementById('submitBtn');
//     alertDialog.style.display = 'block';
//     return false;
//   } else {
//     alert('Task Added!');
//     // tasks.addTask(validFormFieldInput);
//     return true;
//   }
// }


 



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
// tasks.addTask(description);
console.log(tasks);