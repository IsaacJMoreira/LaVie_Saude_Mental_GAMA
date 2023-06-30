import { User } from "../../database/user.model.js"
import { Notifications } from '../../database/notification.js'

export class UsersRepository{
  async create(name) {
    return await User.create({ name })
  }

  async findAll() {
    return await User.findAll({
      include: [ Notification ]
    });
  }
}
