//⚠ cuidado quando usar esse tipo de iport. usar o sucrase
const express = require('express');//includes the express functionality
const routes = require('./routes');//import the routes from the  /routes directory
const db = require('./database');
const app = express();
const port = 3000;
const middlewaresPacientes = require("./middlewares/middlewaresPacientes");

db.hasConnection();

app.use(routes);//uses the routes imported from the /routes directory
app.use(middlewaresPacientes);// Erro validação pacientes

/////////////////////////////////////////////////////////////////
/*                 START THE SERVER WE CREATED                 */
/////////////////////////////////////////////////////////////////

// OK, this method has a bunch os parameters, but for sinplicitys sake, 
// we only give it the port it must listen to, the IP and olther para-
// meters are given by default.
// Basicaly we order the app class to listen to the port 3000.
// We specified the routes inside the /routes/index.js file this app.js
// appear cleaner. The callback function that we pass to it is only a 
// log, but we could and probaby should do more.

app.listen(port, ()=> console.log("🔥🔥🔥 TÔ RODANDO!!! 🔥🔥🔥"));