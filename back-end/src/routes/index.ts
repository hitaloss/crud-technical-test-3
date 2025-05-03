import { Express } from "express";
import { usersRouters } from "./users.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", usersRouters());
};
