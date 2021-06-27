import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";

class ListTagController {
  async handle(request: Request, response: Response) {
    const listTag = new ListTagService();
    const list = await listTag.execute();
    return response.json(list);
  }
}
export { ListTagController };
