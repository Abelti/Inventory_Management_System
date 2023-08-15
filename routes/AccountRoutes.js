const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
    res.send(`Account created successfully for ${req.body.company}`);
});

router.post('/login', (req, res) => {
    res.send(`Login ${req.body.company}`);
});

router.put('/update', (req, res) => {
    res.send(`Account update ${req.body.company}`);
});

router.delete('/terminate', (req, res) => {
    res.send(`Account terminate ${req.body.company}`);
});

module.exports = router;