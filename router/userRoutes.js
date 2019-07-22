const express = require('express');
const Users = require('../helpers/userModel.js');

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

module.exports = router;
