import { DataTypes } from "sequelize";
import { db } from "../config/db.config.js";

export const Pacientes = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome:{
    type: DataType.STRING(100),
  },
  email:{
    type: DataType.STRING(100),
  },
  nascimento:{
    type: DataType.DATE,
  }
}, { 
  tableName: 'pacientes'
})


