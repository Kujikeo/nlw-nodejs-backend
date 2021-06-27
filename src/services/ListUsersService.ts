import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const list = await usersRepositories.find();
    return list;
  }
}
export { ListUsersService };
