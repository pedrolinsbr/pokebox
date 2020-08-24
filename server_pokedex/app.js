const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./src/routes/Index');
const pokemonsRoute = require('./routes/pokemonRoute');
app.use('/', index);
app.use('/pokemons', pokemonsRoute);
module.exports = app;