const createTaskHtml = (name, description, assignedTo, dueDate, status, id)=> {
    const htmlData = 
    `  <li id="item" class ="card bg-light mb-3 list-group-item list-group-item-action" style="max-width: 18rem;" data-task-id = ${id}>
        <div class="card-header">Task</div>
        <div class="card-body container">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text">${assignedTo}</p>
        <p class="card-text">${dueDate}</p>
        <p id="statusTask">${status}</p>
        </div>
        <button type="button"  class="btn delete-button">Delete</button>
        <button type="button" class="btn done-button">Mark As Done</button>

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
    getTaskById(taskId){
        let foundTask;
        this.tasks.forEach(task => {
            if(task.id == taskId){
                foundTask = task;
            }
        })
        return foundTask;
    }

    save(){
        let tasksJson = JSON.stringify(this.tasks);
        console.log(tasksJson);
        localStorage.setItem('tasks', tasksJson);
        let currentId = this.currentId.toString();
        localStorage.setItem('currentId', currentId);
    } 

    load() {
        if(localStorage.getItem('tasks')){
            let tasksJson = localStorage.getItem('tasks');
            this.tasks = JSON.parse(tasksJson);
            console.log(tasksJson)
        }
        if(localStorage.getItem('currentId')){
            let currentId = localStorage.getItem('currentId')
            currentId = parseInt(currentId);
            this.currentId = currentId;
        }
    }

    deleteTask(taskId){
        let newTasks = [];
        this.tasks.forEach(task => {
            if(task.id != taskId){
                newTasks.push(task);
            }
        });
        this.tasks = newTasks;
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
        document.querySelector('ul').innerHTML = tasksHtml;
     }
}
//Testing Mocha below:
// module.exports = TaskManager;
// console.log(TaskManager())

