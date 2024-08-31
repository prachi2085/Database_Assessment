const db = require('../config/db');

exports.getAssessments = (req, res) => {
    const sql = `SELECT * FROM Assessments`;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
};

exports.createAssessment = (req, res) => {
    const { title, type, userId } = req.body;
    const sql = `INSERT INTO Assessments (title, type, user_id) VALUES (?, ?, ?)`;
    db.query(sql, [title, type, userId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId });
    });
};
