const express = require('express');
const Users = require('../helpers/userModel.js');
const encrypt = require('../hash/obscure.js');

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const allUsers = await Users.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
    });
  }
});

router.post('/register', async (req, res) => {
  let { email, password } = req.body;
  password = encrypt.encryptPassword(password);
  const newUserData = {
    email,
    password,
  };
  try {
    const [newUser] = await Users.addUser(newUserData);
    const user = await Users.findById(newUser);
    if (user) {
      return res.status(201).json(user);
    }
    return res.status(400).json({
      errorMessage: 'Bad request',
    });
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
    });
  }
});

router.post('/login', async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await Users.findByEmail(email);
    if (user && encrypt.comparePassword(password, user.password)) {
      return res.status(200).json({
        message: `Welcome  to your homepage ${user.email}`,
        user,
      });
    }
    return res.status(400).json({
      errorMessage: 'The user with that email does not exist',
    })
  } catch (error) {
    res.status(500).json({
      errorMessage: error,
    });
  }
});

module.exports = router;
