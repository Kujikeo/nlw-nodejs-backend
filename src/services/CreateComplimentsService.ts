import { getCustomRepository } from "typeorm";
import { ComplimetRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";
interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}
class CreateComplimentsService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest) {
    const complimentsRepository = getCustomRepository(ComplimetRepositories);

    const usersRepositories = getCustomRepository(UsersRepositories);

    if (user_sender === user_receiver) {
      throw new Error(
        "The user receiver is the same user in user sender. Please,put different users in request."
      );
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error("User Receiver dosen't exists");
    }
    const compliments = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentsRepository.save(compliments);
    return compliments;
  }
}
export { CreateComplimentsService };
