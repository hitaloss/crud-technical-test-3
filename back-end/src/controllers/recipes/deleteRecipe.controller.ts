import { Request, Response } from "express";

import deleteRecipeService from "../../services/recipes/deleteRecipe.services";

async function deleteRecipeController(request: Request, response: Response) {
  const recipeId = request.params.id;

  const recipeDeleted = deleteRecipeService(recipeId);

  return response
    .status(200)
    .json({ statusCode: 200, message: "Success", recipe: recipeDeleted });
}

export default deleteRecipeController;
