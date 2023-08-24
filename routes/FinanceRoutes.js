const express = require('express');
const router = express.router();
const addItems = require('../controllers/FinanceController');

router.post('/items/add',(req, res) => {
    res.send("Add Item");
})
router.get('/items/view',(req, res) => {
    res.send("Items List");
})
router.put('/items/update',(req, res) => {
    res.send("Items Update");
})
router.delete('/items/destroy',(req, res) =>{
    res.send("Delete item");
});
module.exports = router;
