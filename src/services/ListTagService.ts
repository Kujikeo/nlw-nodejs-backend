import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";
class ListTagService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);
    const list = await tagsRepositories.find();
    return classToPlain(list);
  }
}
export { ListTagService };
