const express = require('express');

const { repairsRouter } = require('./routes/repairs.routes');
const { usersRouter } = require('./routes/users.routes');

// Init express app
const app = express();

app.use(express.json());


// Endpoints
// http://localhost:4000/api/v1/posts
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);




module.exports = {app};