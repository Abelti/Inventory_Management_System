const express = require('express');
const router = express.Router();

router.post(`/employees/add`, (req, res) => {
    res.send('G/M employee add');
});

router.get('/employees/list', (req, res) => {
    res.send('G/M employee list');
    console.log('Hello');
});

router.put('/employees/update', (req, res) => {
    res.send('G/M employee update');
});

module.exports = router;