import { Router } from "express";

import createRecipeController from "../controllers/recipes/createRecipe.controller";
import updateRecipeController from "../controllers/recipes/updateRecipe.controller";
import authMiddleware from "../middlewares/auth.middleware";
import readRecipesController from "../controllers/recipes/readRecipes.controller";
import deleteRecipeController from "../controllers/recipes/deleteRecipe.controller";

const routes = Router();

export function recipeRoutes() {
  routes.post("", authMiddleware, createRecipeController);
  routes.get("", authMiddleware, readRecipesController);
  routes.patch("/:id", authMiddleware, updateRecipeController);
  routes.delete("/:id", authMiddleware, deleteRecipeController);
  return routes;
}
