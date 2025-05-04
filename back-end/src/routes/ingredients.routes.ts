import { Router } from "express";

import authMiddleware from "../middlewares/auth.middleware";
import createIngredientsController from "../controllers/ingredients/createIngredients.controller";
import readIngredientsController from "../controllers/ingredients/readIngredients.controller";
import updateIngredientsController from "../controllers/ingredients/updateIngredients.controller";
import deleteIngredientsController from "../controllers/ingredients/deleteIngredients.controller";

const routes = Router();

export function ingredientsRoutes() {
  routes.post("", authMiddleware, createIngredientsController);
  routes.get("", authMiddleware, readIngredientsController);
  routes.patch("", authMiddleware, updateIngredientsController);
  routes.delete("", authMiddleware, deleteIngredientsController);
  return routes;
}
