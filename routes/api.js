const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Getting list of users from DB
router.get('/users', (req, res, next) => {
  res.send({type: 'GET'});
});

// Add a new user to the DB

// router.post('/users', (req, res) => {
//   var user = new User(req.body);
//   user.save();
//   res.send({
//     type: 'POST',
//     name: req.body.name,
//     rank: req.body.rank
//   });
// });

router.post('/users', (req, res, next) => {
  User.create(req.body).then(user => {
    res.send(user);
  }).catch(next);
});

// Update user in DB
router.put('/users/:id', (req, res, next) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    User.findOne({ _id: req.params.id }).then(user => {
      res.send({ user });
    });
  });
});

// Delete user from DB
router.delete('/users/:id', (req, res, next) => {
  User.findByIdAndRemove({ _id: req.params.id }).then(user => {
    res.send(user);
  });
});

module.exports = router;
