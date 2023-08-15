const express = require('express');
const app = express();
const env = require('dotenv').config();

const GMRouter = require('./routes/GMRoutes');
const Accounts = require('./routes/AccountRoutes');

const PORT = process.env.PORT || 4040;

app.use(express.json());
app.use('/accounts', Accounts);
app.use('/gm', GMRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});