const assert = require('assert');
const TaskManager = require('../js/TaskManager');

describe('#TaskManager()', () => {
    describe('#addTask()', () => {
        it('should add a new task to newTask', () => {  
        const tasks = new TaskManager();
        tasks.addTask("Clean", "clean room", "Ashley", "05/20/2021", "To do");
        assert.ok(tasks.tasks.length == 1);
        });
});
    describe('#deleteTask()', () => {
        it('should delete task', () => {
            const tasks = new TaskManager();
            tasks.addTask("Chores", "Vacuum", "Mike", "05/22/2021", "To do");
            const deleteId = tasks.deleteTask();
            assert.ok(deleteId == null);
        });
    
    describe('#getTaskById()', () => {
        it('should return task by id', () => {
            const tasks = new TaskManager();
            tasks.addTask("Clean", "clean room", "Ashley", "05/20/2021", "To do");
            const getId = tasks.getTaskById(0);
            assert.ok(getId.id == 0);
        });
    });    
    });
});