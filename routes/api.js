const express = require('express');
const router = express.Router();

// Getting list of users from DB
router.get('/users', (req, res) => {
  res.send({type: 'GET'});
});

// Add a new user to the DB
router.post('/users', (req, res) => {
  res.send({type: 'POST'});
});

// Update user in DB
router.put('/users/:id', (req, res) => {
  res.send({type: 'PUT'});
});

// delete user from DB
router.delete('/users/:id', (req, res) => {
  res.send({type: 'DELETE'});
});

module.exports = router;
