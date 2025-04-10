const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
const routes = require('../intelli-aid/src/routes');
app.use('/api', routes());

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});