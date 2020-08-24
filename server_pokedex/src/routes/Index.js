const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const userRoute =  require('./src/routes/PokemonRoute')

app.use(bodyParser.urlencoded({extended: false}))
userRoute(app)

app.listen(port, () => (console.log("Api executada na porta:", port))) 
