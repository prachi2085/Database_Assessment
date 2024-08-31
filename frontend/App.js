const express = require('express');
const app = express();
const db = require('./db'); // Import the database connection

// Middleware and routes
app.use(express.json());

// Example route to fetch data from MySQL
app.get('/data', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

