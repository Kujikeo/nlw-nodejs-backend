import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUserController {
  async handle(request: Request, response: Response) {
    const listUsers = new ListUsersService();
    const list = await listUsers.execute();
    return response.json(list);
  }
}
export { ListUserController };
