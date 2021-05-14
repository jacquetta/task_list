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
       console.log(this.tasks);
    }
    
}
