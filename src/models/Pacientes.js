const { DataTypes } = require("sequelize");
const  db  = require ("../database");

const Pacientes = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome:{
    type: DataTypes.STRING(100),
  },
  email:{
    type: DataTypes.STRING(100),
  },
  nascimento:{
    type: DataTypes.DATE,
  }
}, { 
  tableName: 'pacientes'
})

module.exports = Pacientes;
