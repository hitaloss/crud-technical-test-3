import { Request, Response } from "express";

import createRecipeService from "../../services/recipes/createRecipe.services";

async function createRecipeController(request: Request, response: Response) {
  const { title, image_url, flavor, complexity } = request.body;

  const newRecipe = await createRecipeService({
    title,
    imageUrl: image_url,
    flavor,
    complexity,
  });

  return response
    .status(201)
    .json({ statusCode: 201, message: "Success", recipe: newRecipe });
}

export default createRecipeController;
