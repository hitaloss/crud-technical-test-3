import { Express } from "express";
import { usersRouters } from "./users.routes";
import { sessionRouters } from "./session.routes";
import { recipeRoutes } from "./recipes.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", usersRouters());
  app.use("/session", sessionRouters());
  app.use("/recipes", recipeRoutes());
};
