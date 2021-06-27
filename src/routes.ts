import { Router } from "express";
import { CreateUserController } from "./controllers/CreateuserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUsersController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentsController = new CreateComplimentController();
const listUserReceiverComplimentsController =
  new ListUserReceiverComplimentsController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listTagController = new ListTagController();
const listUserController = new ListUserController();
router.post("/users", createUserController.handle);

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentsController.handle
);
router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);
router.get(
  "/users/compliments/receiver",
  ensureAuthenticated,
  listUserReceiverComplimentsController.handle
);

router.get("/tags/list", ensureAuthenticated, listTagController.handle);

router.get("/users", ensureAuthenticated, listUserController.handle);

export { router };
