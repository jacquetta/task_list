const createTaskHtml = (name, description, assignedTo, dueDate, status, id)=> {
    const htmlData = 
    `  <li class="list-group-item" data-task-id = ${id}>
        <div class="card bg-light mb-3 list-group-item list-group-item-action" style="max-width: 18rem;">
        <div class="card-header">Task ${id}</div>
        <div class="card-body container">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text">${assignedTo}</p>
        <p class="card-text">${dueDate}</p>
        <select name="statusTask" id="statusTask">
            <option value="">${status}</option>
            <option value="todo" selected>TODO</option>
            <option value="inProgress">IN PROGRESS</option>
            <option value="review">REVIEW</option>
            <option value="done">DONE</option>
        </select>
        </div>
        <div class="btn-div row justify-content-around">
             <button type="button"  class="btn edit-btn">Edit</button>
             <button type="button" class="btn done-button">Mark As Done</button>
         </div>
      </div>
    </li>`
    return htmlData;
}

class TaskManager {

    constructor(currentId = 1,){
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(name, description, assignedTo, dueDate, status){
       let newTask = {
           id: this.currentId++,
           name: name,
           description: description,
           assignedTo: assignedTo,
           dueDate: dueDate,
           status: status
       }
       this.tasks.push(newTask);
    }
    
    render(){
        let taskHtmlList = [];
        this.tasks.forEach(task => {
            let currentTask = task;
            let date = new Date(currentTask.dueDate);
            let formattedDate = date.toDateString();
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status, currentTask.id);
            taskHtmlList.push(taskHtml);
        });
        let tasksHtml = taskHtmlList.join('\n');
        return document.querySelector('ul').innerHTML = tasksHtml;
     }

}

console.log(TaskManager())

