const utils = require('../utils/task-schema')

const tasks = [
    {
        id: 1,
        name: "Task 1",
        completed: false
    },
    {
        id: 2,
        name: "Task 2",
        completed: false
    },
    {
        id: 3,
        name: "Task 3",
        completed: false
    }
];

// GET
const getAllTasks =  (request, response) => {
    response.send(tasks);
};

// GET (BY ID)
const getTaskByID = (request, response) => {
    const taskId = request.params.id;
    const task = tasks.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).send("The task with the provided ID does not exist.");
    response.send(task);
};

// POST
const addTask = (request, response) => {
    const { error } = utils.validateTask(request.body);

    if(error) return response.status(400).send("The name should be at least 3 chars long!")

    const task = {
        id: tasks.length + 1,
        name: request.body.name,
        completed: request.body.completed
    };

    tasks.push(task);
    response.status(201).send(task);
};

//PUT
const updateTask = (request, response) => {
    const taskId = request.params.id;
    const task = tasks.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).send("The task with the provided ID does not exist.");

    const { error } = utils.validateTask(request.body);

    if(error) return response.status(400).send("The name should be at least 3 chars long!")

    task.name = request.body.name;
    task.completed = request.body.completed;

    response.send(task);
};



// //PATCH
// app.patch("/api/tasks/:id", (request, response) => {
//     const taskId = request.params.id;
//     const task = tasks.find(task => task.id === parseInt(taskId));
//     if(!task) return response.status(404).send("The task with the provided ID does not exist.");

//     const { error } = utils.validateTask(request.body);

//     if(error) return response.status(400).send("The name should be at least 3 chars long!")

//     task.name = request.body.name;

//     if(request.body.completed) {
//         task.completed = request.body.completed;
//     }
//     response.send(task);
// });

//DELETE
const deleteByID = (request, response) => {
    const taskId = request.params.id;
    const task = tasks.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).send("The task with the provided ID does not exist.");

    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    response.send(task);
};

module.exports = {
    getAllTasks,
    getTaskByID,
    addTask,
    updateTask,
    deleteByID
}
