import { User } from "../../database/user.model.js"
import { Notifications } from '../../database/notification.js'

export class NotificationsRepository{
  async create(message, user_id) {
    return await User.create({ message, user_id })
  }
}
