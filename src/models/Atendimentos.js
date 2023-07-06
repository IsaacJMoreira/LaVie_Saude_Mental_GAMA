const { DataTypes } = require( "sequelize");
const db  = require('../database');
const Pacientes = require('../models/Pacientes.js');
const Psicologos = require('../models/Psicologos.js');

 const Atendimentos = db.define('Atendimentos', {
 id:{
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
 },
 id_paciente:{
  type: DataTypes.INTEGER,
  references:{
    model: Pacientes,
    key: 'id',
  }
 },
 id_psicologo:{
  type: DataTypes.INTEGER,
  references:{
    model: Psicologos,
    key: 'id',
  }
 },
 atendimento:{
  type: DataTypes.DATE //ATENÇÃO ⚠ >>> COMO FAZER COM DATETIME?
 },
 OBS:{
  type: DataTypes.STRING(1000)
 }
}, { 
  tableName: 'atendimentos',
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

module.exports = Atendimentos;
