import { Request, Response } from "express";

import updateRecipeService from "../../services/recipes/updateRecipe.services";
import { IRecipePatchRequest } from "../../interfaces/recipe/recipe";

async function updateRecipeController(request: Request, response: Response) {
  const { title, image_url, flavor, complexity }: IRecipePatchRequest =
    request.body;
  const receiptId = request.params.id;

  const updatedRecipe = await updateRecipeService(receiptId, {
    title,
    imageUrl: image_url,
    flavor,
    complexity,
  });

  return response
    .status(200)
    .json({ statusCode: 200, message: "Success", recipe: updatedRecipe });
}

export default updateRecipeController;
