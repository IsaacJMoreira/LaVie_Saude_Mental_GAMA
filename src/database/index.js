const Sequelize = require('sequelize');

const DB_NAME = 'LaVie';
const DB_USER = 'root';
const DB_PASS = 'Arya2021#';
const DB_CONF = {
    dialect:'mysql',
    host:'localhost',
    port: 3306
}


let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONF);
} catch (error) {
    console.error("ERRO AO CONECTAR O DB");
}

async function hasConnection(){
    try {
        await db.authenticate();
        console.log("Banco de dados conectado!");
    } catch (error) {
        console.error("Erro aos tentar conectar");
    }
}

Object.assign(db, {
    hasConnection,
});

module.exports = db;