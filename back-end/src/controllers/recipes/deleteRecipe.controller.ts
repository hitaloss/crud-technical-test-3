import { Request, Response } from "express";

import deleteRecipeService from "../../services/recipes/deleteRecipe.services";

async function deleteRecipeController(request: Request, response: Response) {
  const recipeId = request.params.id;

  await deleteRecipeService(recipeId);

  return response.status(200).json({
    statusCode: 200,
    message: "Success",
    recipe: "Receipt deleted with success.",
  });
}

export default deleteRecipeController;
