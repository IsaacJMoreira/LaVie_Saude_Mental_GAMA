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
  references:{
    model: Pacientes,
    key: 'id',
  }
 },
 id_psicologo:{
  type: DataType.INTEGER,
  references:{
    model: Psicologos,
    key: 'id',
  }
 },
 atendimento:{
  type: DataType.DATETIME
 },
 OBS:{
  type: DataType.STRING(1000)
 }
}, { 
  tableName: 'atendimentos'
})

