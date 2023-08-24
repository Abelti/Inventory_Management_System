//create
//view
//update
//delete

//controllers are functions => asynchronous functions

const addItems = (req, res) => {
    res.send('Add item from controller');
};

const viewItems = (req, res) => {
    res.send('View item from controller');
};


const updateItems = (req, res) => {
    res.send('Update item from controller');
};


const deleteItems = (req, res) => {
    res.send('Delete item from controller');
};

module.exports = {addItems, deleteItems, updateItems, viewItems};