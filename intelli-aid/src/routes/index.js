// This file sets up the routes for the application.

const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('Welcome to the Intelli-Aid API!');
});

// Export the router
module.exports = router;