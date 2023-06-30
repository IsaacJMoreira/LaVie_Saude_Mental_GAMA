import { DataTypes } from "sequelize";
import { db } from "../config/db.config.js";

export const User = db.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { 
  timestamps: false
})

User.associate = function(models) {
  User.hasMany(models.Notifications, { foreignKey: 'user_id' });
};
