const express = require('express');
const routes = require('./routes/users-route');
const cors = require('cors');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);

module.exports = app;