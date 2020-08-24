
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const userRoute =  require('./src/routes/PokemonRoute')

app.use(bodyParser.urlencoded({extended: false}))
userRoute(app)

var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
      });

      

app.listen(port, () => (console.log("Api executando na porta:", port))) 

