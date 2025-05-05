import { Router } from "express";

import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";

const routes = Router();

export function usersRouters() {
  routes.post("", createUserController);
  routes.delete("/:id", deleteUserController);
  return routes;
}
