const express = require('express')
const userRoutes = require('./routes/users-route')
const propriedadeRoutes = require('./routes/propriedade-route')
const tecnicosRoutes = require('./routes/tecnicos-route')
const inventarioRoutes = require('./routes/inventario-route')
const inclusoesRapidasRoutes = require('./routes/inclusoes-rapidas-routes')
const MedicamentosRoutes = require('./routes/medicamentos-routes')
const cors = require('cors')

require('./database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(userRoutes)
app.use(propriedadeRoutes)
app.use(tecnicosRoutes)
app.use(inventarioRoutes)
app.use(inclusoesRapidasRoutes)
app.use(MedicamentosRoutes)

app.listen(process.env.PORT || 3333)

module.exports = app
