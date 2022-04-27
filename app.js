const express = require('express');

const { postsRouter } = require('./routes/posts.routes');
const { usersRouter } = require('./routes/users.routes');

// Init express app
const app = express();



// Endpoints
// http://localhost:4000/api/v1/posts
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', postsRouter);




module.exports = {app};