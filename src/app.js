//⚠ cuidado quando usar esse tipo de iport. usar o sucrase
const express = require('express');//includes the express functionality
const routes = require('./routes');//import the routes from the  /routes directory
const errorHandler = require("./middlewares/ErrorHandler");//middleware to handle all the errors
const db = require('./database');
const app = express();
const port = 3000;

const EQUIPE = "EQUIPE 1 \n>ISAAC MOREIRA\n>VALFRIDO BATISTA\n>APOLO LEONARD\n>DIEGO VICENTINI\n>YOSEF EGITO\n";

db.hasConnection();

app.use(routes);//uses the routes imported from the /routes directory

app.use(errorHandler);



app.listen(port, ()=> console.log(`\n 🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠\n🧠 LaVie Saude Mental  LTDA 🧠\n 🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠\n\n${EQUIPE} `));