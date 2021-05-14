const createTaskHtml = (name, description, assignedTo, dueDate, status)=> {
    const htmlData = 
    `  <li class="list-group-item">
        <div class="card bg-light mb-3 list-group-item list-group-item-action" style="max-width: 18rem;">
        <div class="card-header">Task #</div>
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text">${assignedTo}</p>
        <p class="card-text">${dueDate}</p>
        <select name="statusTask" id="statusTask">
            <option value="">${status}</option>
            <option value="todo">TODO</option>
            <option value="inProgress">IN PROGRESS</option>
            <option value="review">REVIEW</option>
            <option value="done">DONE</option>
        </div>
        <div class="deleteBtn">
            <button class="done-button btn">Mark As Done</button>
            <button type="submit" class="btn">Delete</button>
        </div>
    </div>
    </li>`
    return htmlData;
}

class TaskManager {

    constructor(currentId = 0,){
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
            let formattedDate = date.toString();
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
            taskHtmlList.push(taskHtml);
        });
        let tasksHtml = taskHtmlList.join('\n');
        return document.querySelector('ul').innerHTML = tasksHtml;
     }

}

          