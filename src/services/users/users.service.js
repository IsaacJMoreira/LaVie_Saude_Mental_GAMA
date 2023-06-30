import { UsersRepository } from "../../repositories/users/users.repository.js";

const repository = new UsersRepository();

export class UsersService {
  async create(name, email) {
    const user = await repository.create(name)

    return user;
  }

  async findAll() {
    return await repository.findAll()
  }
}
