const express = require('express');
const userRoutes = require('./routes/users-route');
const propriedadeRoutes = require('./routes/propriedade-route');
const tecnicosRoutes = require('./routes/tecnicos-route');
const cors = require('cors');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(propriedadeRoutes);
app.use(tecnicosRoutes);

app.listen(process.env.PORT || 3333);

module.exports = app;