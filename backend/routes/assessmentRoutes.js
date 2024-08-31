const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/assessments', (req, res) => {
  const { title, description, user_id } = req.body;
  const query = 'INSERT INTO Assessments (title, description, user_id) VALUES (?, ?, ?)';
  db.query(query, [title, description, user_id], (err, result) => {
    if (err) throw err;
    res.status(201).send('Assessment created successfully');
  });
});

router.get('/assessments', (req, res) => {
  const query = 'SELECT * FROM Assessments';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
