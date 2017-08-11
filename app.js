const express = require('express');
const routes = require('./routes/api');

// Set up express app
const app = express();

// Using routes
app.use('/api', routes);

// Set up port
const port = process.env.port || 3000;

// Set up port for listening of the requests
app.listen(port, () => {
  console.log('Connected to server on port 3000...');
});
