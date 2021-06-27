import { Request, Response } from "express";
import { ListUserSendCompimentsService } from "../services/ListUserSendCompimentsService";

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserSendComplimentsRepository =
      new ListUserSendCompimentsService();
    const list = await listUserSendComplimentsRepository.execute(user_id);
    return response.json(list);
  }
}
export { ListUserSendComplimentsController };
