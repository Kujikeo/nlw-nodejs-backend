import { getCustomRepository } from "typeorm";
import { ComplimetRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendCompimentsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimetRepositories);
    const compliments = complimentsRepository.find({
      where: {
        user_sender: user_id,
      },
    });
    return compliments;
  }
}
export { ListUserSendCompimentsService };
