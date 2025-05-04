import { Request, Response } from "express";

import { IIngredientsCreate } from "../../interfaces/ingredients/ingredients";
import createIngredientsServices from "../../services/ingredients/createIngredients.services";

async function createIngredientsController(
  request: Request,
  response: Response
) {
  const { name, quantity }: IIngredientsCreate = request.body;
  const recipeId = request.params.id;

  const newIngredients = await createIngredientsServices(recipeId, {
    name,
    quantity,
  });

  return response
    .status(201)
    .json({ statusCode: 201, message: "Success", ingredients: newIngredients });
}

export default createIngredientsController;
