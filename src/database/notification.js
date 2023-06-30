import { db } from "../config/db.config.js";
import { DataTypes } from "sequelize";
import { User } from "./user.model.js";


export const Notifications = db.define('notifications', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  message: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
}, { 
  timestamps: false
})

User.hasMany(Notifications, { foreignKey: 'user_id' });
Notifications.belongsTo(User, { foreignKey: 'user_id' });