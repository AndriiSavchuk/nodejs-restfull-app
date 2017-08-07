const express = require('express');

// Set up express app
const app = express();

//Set up port
const port = process.env.port || 3000;



// Set up port for listening of the requests
app.listen(port, () => {
  console.log('Connected to server on port 3000...');
});
