import { DataTypes } from "sequelize";
import { db } from "../config/db.config.js";

export const Psicologos = db.define('users', {
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
  senha:{
    type: DataType.STRING(30),
  },
  apresentacao:{
    type: DataType.STRING(1000),
  }
}, { 
  tableName: 'psicologos'
})


