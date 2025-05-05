import { Request, Response } from "express";

import readRecipesServices from "../../services/recipes/readRecipes.services";

async function readRecipesController(_: Request, response: Response) {
  const recipes = await readRecipesServices();
  return response
    .status(200)
    .json({ statusCode: 200, message: "Success", recipes: recipes });
}

export default readRecipesController;
