let chai = require('chai');
const chaiHttp = require('chai-http');
let server = require('../app');

//Assertion style
chai.should();
chai.use(chaiHttp);

//Test Cases
describe('Tasks API', () => {
    /**
     * Test the GET Route
     */
    describe('GET /api/tasks', () => {
        it('It should get all the tasks', (done) => {
            chai.request(server)
                .get('/api/tasks')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(3);
                    done();
                });
        });

        it('It should return 404', (done) => {
            chai.request(server)
                .get('/api/task')
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });


    /**
     * Test the GET By ID Route
     */
    describe('GET /api/tasks/:id', () => {
        it('It should get a task by ID', (done) => {
            const taskID = 1;

            chai.request(server)
                .get(`/api/tasks/${taskID}`) 
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('completed');
                    response.body.should.have.property('id').eq(1);
                    done();
                });
        });

        it('It should not get a task by id and return 404', (done) => {
            const taskID = 123;

            chai.request(server)
                .get(`/api/tasks/${taskID}`) 
                .end((err, response) => {
                    response.should.have.status(404);
                    response.text.should.be.eq('The task with the provided ID does not exist.');
                    done();
                });
        });
    });

    /**
     * Test the POST Route
     */
    describe('POST /api/tasks', () => {
        it('It should POST a new Task', (done) => {
            const task = {
                name: 'Task 4',
                completed: false
            };

            chai.request(server)
                .post(`/api/tasks`)
                .send(task) 
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(4);
                    response.body.should.have.property('name').eq('Task 4');
                    response.body.should.have.property('completed').eq(false);
                    done();
                });
        });

        it('It should NOT POST a new Task because name is required', (done) => {
            const task = {
                completed: false
            };

            chai.request(server)
                .post(`/api/tasks`)
                .send(task) 
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq('The name should be at least 3 chars long!');
                    done();
                });
        });
    });

    /**
     * Test the PUT Route
     */
    describe('PUT /api/tasks/:id', () => {

        it('It should PUT an existing Task', (done) => {
            const taskID = 1;
            const task = {
                name: 'Task 1 Changed',
                completed: true
            };

            chai.request(server)
                .put(`/api/tasks/${taskID}`)
                .send(task) 
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(taskID);
                    response.body.should.have.property('name').eq(task.name);
                    response.body.should.have.property('completed').eq(task.completed);
                    done();
                });
        });

        it('It should NOT PUT an existing Task with name less than 3 characters', (done) => {
            const taskID = 1;
            const task = {
                name: 'Ta',
                completed: true
            };

            chai.request(server)
                .put(`/api/tasks/${taskID}`)
                .send(task) 
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq('The name should be at least 3 chars long!')
                    done();
                });
        });

        it('It should NOT PUT a Task with task ID missing', (done) => {
            const taskID = 5;
            const task = {
                name: 'Ta',
                completed: true
            };

            chai.request(server)
                .put(`/api/tasks/${taskID}`)
                .send(task) 
                .end((err, response) => {
                    response.should.have.status(404);
                    response.text.should.be.eq('The task with the provided ID does not exist.')
                    done();
                });
        });

    });

    /**
     * Test the DELETE Route
     */
    describe('DELETE /api/tasks/:id', () => {

        it('It should DELETE an existing Task', (done) => {
            const taskID = 1;

            chai.request(server)
                .delete(`/api/tasks/${taskID}`)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property('id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('completed');
                    done();
                });
        });

        it('It should NOT DELETE a Task that is not in the database', (done) => {
            const taskID = 145;

            chai.request(server)
                .delete(`/api/tasks/${taskID}`)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.text.should.be.eq('The task with the provided ID does not exist.')
                    done();
                });
        });
    });
})