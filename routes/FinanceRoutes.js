const express = require('express');
const router = express.Router();
const {addItems, viewItems, updateItems, deleteItems} = require('../controllers/FinanceController');

router.post('/items/add', addItems);

router.get('/items/view', viewItems);

router.put('/items/update', updateItems);

router.delete('/items/delete', deleteItems);

module.exports = router;