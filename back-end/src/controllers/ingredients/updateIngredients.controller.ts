import { Request, Response } from "express";

import { IIngredientsPatch } from "../../interfaces/ingredients/ingredients";
import updateIngredientsServices from "../../services/ingredients/updateIngredients.services";

async function updateIngredientsController(
  request: Request,
  response: Response
) {
  const ingredientsId = request.params.id;
  const { name, quantity }: IIngredientsPatch = request.body;

  const updatedIngredients = await updateIngredientsServices(ingredientsId, {
    name,
    quantity,
  });

  return response
    .status(200)
    .json({
      statusCode: 200,
      message: "Success",
      ingredients: updatedIngredients,
    });
}

export default updateIngredientsController;
