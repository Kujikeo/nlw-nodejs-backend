import { getCustomRepository } from "typeorm";
import { ComplimetRepositories } from "../repositories/ComplimentsRepositories";
import { hash } from "bcryptjs";
import { classToPlain } from "class-transformer";

class ListUserRevceiverComplimentsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimetRepositories);
    const compliments = complimentsRepository.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });
    return classToPlain(compliments);
  }
}
export { ListUserRevceiverComplimentsService };
