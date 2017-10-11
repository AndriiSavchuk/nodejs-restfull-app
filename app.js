const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

// Set up express app
const app = express();

// Set up Body Parser middleware
app.use(bodyParser.json());

// Using routes
app.use('/api', routes);

// Set up port
const port = process.env.port || 3000;

// Set up port for listening of the requests
app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});
