const express = require('express');
const router = express.Router();

// Getting list of users from DB
router.get('/users', (req, res) => {
  res.send({type: 'GET'});
});

// Add a new user to the DB
router.post('/users', (req, res) => {
  console.log(req.body)
  res.send({
    type: 'POST',
    name: req.body.name,
    surname: req.body.surname
  });
});

// Update user in DB
router.put('/users/:id', (req, res) => {
  res.send({type: 'PUT'});
});

// Delete user from DB
router.delete('/users/:id', (req, res) => {
  res.send({type: 'DELETE'});
});

module.exports = router;
