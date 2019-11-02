const express = require('express')
const bodyParser = require('body-parser')
const categoriaRoutes = require('./my_modules/categoria-routes')

const app = express()
app.use(bodyParser.json())
app.use('/categoria', categoriaRoutes)

const port = 3000
app.listen(port, () => console.log(`Api rodando na porta ${port}!`))