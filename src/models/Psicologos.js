const { DataTypes } = require( "sequelize");
const  db  =  require('../database');

const Psicologos = db.define('Psicologos', {
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
  senha:{
    type: DataTypes.STRING(30),
  },
  apresentacao:{
    type: DataTypes.STRING(1000),
  }
}, { 
  tableName: 'psicologos',
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

module.exports = Psicologos;
