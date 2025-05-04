import { Response } from "express";

import readIngredientsServices from "../../services/ingredients/readIngredients.services";

async function readIngredientsController(response: Response) {
  const ingredients = await readIngredientsServices();

  return response
    .status(200)
    .json({ statusCode: 200, message: "Success", ingredients });
}

export default readIngredientsController;
