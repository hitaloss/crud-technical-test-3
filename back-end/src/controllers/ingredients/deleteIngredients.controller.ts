import { Request, Response } from "express";
import deleteIngredientsServices from "../../services/ingredients/deleteIngredients.services";

async function deleteIngredientsController(
  request: Request,
  response: Response
) {
  const ingredientsId = request.params.id;

  const deletedIngredients = await deleteIngredientsServices(ingredientsId);

  return response.status(200).json({
    statusCode: 200,
    message: "Success",
    ingredients: deletedIngredients,
  });
}

export default deleteIngredientsController;
