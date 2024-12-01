const express = require('express');
const { createMessage } = require('../controllers/messageController');
const router = express.Router();

router.post('/submit-message', createMessage);

module.exports = router;