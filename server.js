const express = require('express');
const app = express();
const env = require('dotenv').config();

const GM = require('./routes/GMRoutes');
const Accounts = require('./routes/AccountRoutes');
const Finance = require('./routes/FinanceRoutes');
const Store = require('./routes/StorekeeperRoutes');
const Sales = require('./routes/SalesRoutes');
const Admin = require('./routes/AdminRoutes');

const PORT = process.env.PORT || 4040;

app.use(express.json());
app.use('/accounts', Accounts);
app.use('/gm', GM);
app.use('/finance', Finance);
app.use('/store', Store);
app.use('/admin', Admin);
app.use('/sales', Sales);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});