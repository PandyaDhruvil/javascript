let express = require('express');
let app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js ');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
