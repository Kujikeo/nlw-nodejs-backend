import { getCustomRepository } from "typeorm";
import { ComplimetRepositories } from "../repositories/ComplimentsRepositories";
import { hash } from "bcryptjs";

class ListUserRevceiverComplimentsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimetRepositories);
    const compliments = complimentsRepository.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });
    return compliments;
  }
}
export { ListUserRevceiverComplimentsService };
