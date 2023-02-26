const express = require('express');

const port = 3000;
const app = express();

//Middlewares
app.use(express.json());

app.use('/user', require('./routes/users'))
app.use('/api', require('./routes/tasks'))



app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

module.exports = app;