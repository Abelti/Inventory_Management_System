//creat
//view
//update
//delete
//controllers are functions =>asynchronous function

const addItems =(res,req)=>{
    res.send("Add items from controller");
}
module.exports = addItems;