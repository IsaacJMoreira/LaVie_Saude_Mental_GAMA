import { DataTypes } from "sequelize";
import { db } from "../config/db.config.js";

export const Atendimentos = db.define('Atendimentos', {
 id:{
  type: DataType.INTEGER,
  primaryKey: true,
  autoIncrement: true
 },
 id_paciente:{
  type: DataType.INTEGER,
 },
 id_psicologo:{
  type: DataType.INTEGER
 },
 atendimento:{
  type: DataType.DATETIME
 },
 OBS:{
  type: DataType.STRING(1000)
 }
}, { 
  timestamps: false
})
//Importação 🛬  das foreign keys 🔑 
Atendimentos.associate = function(models) {
  Atendimentos.belongsTo(models.Pacientes, { foreignKey: 'id_paciente' });
};
Atendimentos.associate = function(models) {
  Atendimentos.belongsTo(models.Psicologos, { foreignKey: 'id_psicologo' });
};
