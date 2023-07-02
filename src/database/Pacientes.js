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
  timestamps: false
})

//Exportação 🛫 da primaryKey 🔑 

Pacientes.associate = function(models) {
  Pacientes.hasMany(models.Atendimentos, { foreignKey: 'id' });
};

