const express = require('express');
const routes = require('./routes/users-route');
const cors = require('cors');
const controller = require('./controllers/users-controllers');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
