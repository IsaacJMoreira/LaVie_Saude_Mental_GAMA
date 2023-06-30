import { UsersService } from "../../services/users/users.service.js";

const usersService = new UsersService();

export class UsersController {
  async findAll(req, res) {
    const users = await usersService.findAll();

    res.json({ users });
  }

  async create(req, res) {
    const { body: { name, email } } = req;
    
    const user = await usersService.create(name, email)

    res.json({ user: { user } })
  }
}