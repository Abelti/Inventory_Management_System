const express = require('express');
const app = express();
const env = require('dotenv').config();

// const GMRouter = require('./routes/GMRoutes');
// const Accounts = require('./routes/AccountRoutes');
// const accounts = require("./routes/AccountRoutes");
const finance = require('./routes/FinanceRoutes');
// const store = require('./routes/StorekeeperRoutes');
// const sales = require('./routes/SalesRoutes');
// const admin = require('./routes/AdminRoutes');

const PORT = process.env.PORT || 4040;

// app.use(express.json());
// app.use('/accounts', Accounts);
// app.use('/gm', GMRouter);
app.use('/finance', finance);
// app.use('/store', store);
// app.use('/admin', Admin);
// app.use('/sales', sales);
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});