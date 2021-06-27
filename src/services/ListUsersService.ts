import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";
class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const list = await usersRepositories.find();
    return classToPlain(list);
  }
}
export { ListUsersService };
