const express = require('express');
const router = express.Router();

// @route POST api/users
// @desc Register
// @access Public
router.post('/', (req, res) => {
  res.send('Register user');
});

module.exports = router;
