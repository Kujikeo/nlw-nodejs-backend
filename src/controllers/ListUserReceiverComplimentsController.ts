import { Request, Response } from "express";
import { ListUserRevceiverComplimentsService } from "../services/ListUserRevceiverComplimentsService";

class ListUserReceiverComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserReceiverComplimentsRepository =
      new ListUserRevceiverComplimentsService();
    const list = await listUserReceiverComplimentsRepository.execute(user_id);
    return response.json(list);
  }
}
export { ListUserReceiverComplimentsController };
