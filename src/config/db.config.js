import Sequelize from 'sequelize';

//just for my system
const DB_NAME='LaVie';
const DB_USER='root';
const DB_PASS='1234';
const DB_CONFIGS = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
}

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIGS);

(async () => {
  try {
    await db.authenticate();
    console.log('Conectado com sucesso!')
  } catch (err) {
    console.error(err)
  }
})()

export { db };